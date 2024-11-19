import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/prisma/prisma-client'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      productItemId,
      cartId,
      ingredientsIds,
      ingredientsPrice = 0,
    }: { productItemId: number; cartId: number; ingredientsIds?: number[]; ingredientsPrice?: number } = body

    const newCart = await prisma.$transaction(async (prisma) => {
      await prisma.$executeRaw`SELECT 1 FROM "Cart" WHERE id = ${cartId} FOR UPDATE`

      const cart = await prisma.cart.findFirst({ where: { id: cartId } })

      if (!cart) {
        return NextResponse.json({ message: 'Корзина не найдена' }, { status: 404 })
      }

      const cartItem = await prisma.cartItem.create({
        data: {
          productItemId,
          cartId,
          quantity: 1,
          ingredients: ingredientsIds && { connect: ingredientsIds.map((id) => ({ id })) },
        },
        include: {
          productItem: true,
        },
      })

      const newCart = await prisma.cart.update({
        where: { id: cartId },
        data: {
          totalAmount: cart.totalAmount + cartItem.productItem.price + ingredientsPrice,
        },
        include: {
          items: {
            orderBy: { createdAt: 'desc' },
            include: { productItem: { include: { product: true } }, ingredients: true },
          },
        },
      })

      return newCart
    })

    return NextResponse.json(newCart, { status: 201 })
  } catch (e) {
    console.log(e)
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body: { productVariantId: number; prevQuantity: number; newQuantity: number; cartId: number } =
      await req.json()

    const { productVariantId, prevQuantity, newQuantity, cartId } = body

    const newCart = await prisma.$transaction(async (prisma) => {
      await prisma.$executeRaw`SELECT 1 FROM "Cart" WHERE id = ${cartId} FOR UPDATE`

      const cart = await prisma.cart.findFirst({ where: { id: cartId } })

      if (!cart) {
        return NextResponse.json({ message: 'Корзина не найдена' }, { status: 404 })
      }

      const prevCartItem = await prisma.cartItem.findFirst({ where: { cartId, productItemId: productVariantId } })

      if (!prevCartItem) {
        return NextResponse.json({ message: 'В корзине отсутствует данный товар' }, { status: 404 })
      }

      const cartItem = await prisma.cartItem.update({
        where: { id: prevCartItem.id },
        data: {
          quantity: newQuantity,
        },
        include: {
          productItem: true,
        },
      })

      const newCart = await prisma.cart.update({
        where: { id: cartId },
        data: {
          totalAmount: cart.totalAmount + (newQuantity - prevQuantity) * cartItem.productItem.price,
        },
        include: {
          items: {
            orderBy: { createdAt: 'desc' },
            include: { productItem: { include: { product: true } }, ingredients: true },
          },
        },
      })

      return newCart
    })

    return NextResponse.json(newCart, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: 'Ошибка при изменении колличества предметов', error: (e as Error).message },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json()

    const { cartItemId, cartId } = body

    const newCart = await prisma.$transaction(async (prisma) => {
      await prisma.$executeRaw`SELECT 1 FROM "Cart" WHERE id = ${cartId} FOR UPDATE`

      const cart = await prisma.cart.findFirst({ where: { id: cartId } })

      if (!cart) {
        return NextResponse.json({ message: 'Корзина не найдена' }, { status: 404 })
      }

      const cartItem = await prisma.cartItem.findFirst({
        where: { id: cartItemId },
        include: {
          productItem: true,
          ingredients: true,
        },
      })

      if (!cartItem) {
        return NextResponse.json({ message: 'Товар не найден' }, { status: 404 })
      }

      await prisma.cartItem.delete({
        where: { id: cartItemId },
      })

      const ingredientsPrice = cartItem.ingredients.reduce((acc, ingredient) => {
        return acc + ingredient.price
      }, 0)

      const newCart = await prisma.cart.update({
        where: { id: cartId },
        data: {
          totalAmount: cart.totalAmount - cartItem.productItem.price * cartItem.quantity - ingredientsPrice,
        },
        include: {
          items: {
            orderBy: { createdAt: 'desc' },
            include: { productItem: { include: { product: true } }, ingredients: true },
          },
        },
      })

      return newCart
    })

    return NextResponse.json(newCart, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: 'Ошибка при удалении элемента корзины', error: (e as Error).message },
      { status: 500 }
    )
  }
}
