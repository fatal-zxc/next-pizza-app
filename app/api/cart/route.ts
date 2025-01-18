import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import prisma from '@/prisma/prisma-client'

export async function GET(req: NextRequest) {
  try {
    const userId = 1
    const tokenId = cookies().get('cartToken')?.value

    // if (!tokenId) {
    //   return NextResponse.json({ cart: [] })
    // }

    const userCart = await prisma.cart.findFirst({
      where: { OR: [{ userId }, { tokenId }] },
      include: {
        items: {
          orderBy: { createdAt: 'desc' },
          include: { productItem: { include: { product: true } }, ingredients: true },
        },
      },
    })

    return NextResponse.json(userCart)
  } catch (e) {
    return NextResponse.json(
      { message: 'Ошибка при поиске корзины', error: (e as Error).message },
      { status: 500 }
    )
  }
}
