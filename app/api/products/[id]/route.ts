import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/prisma/prisma-client'

export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.pathname.split('/')[3])
  const products = await prisma.product.findMany({
    where: { id: id },
    include: { productVariant: true, ingredients: true },
  })
  if (!products) return NextResponse.error()
  return NextResponse.json(products[0])
}
