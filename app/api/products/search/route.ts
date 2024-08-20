import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/prisma/prisma-client'

export async function GET(req: NextRequest) {
  const searchText = req.nextUrl.searchParams.get('text') || ''
  const searchTextCapitalize = searchText.charAt(0).toUpperCase() + searchText.slice(1)
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: searchText, mode: 'insensitive' } },
        { name: { contains: searchTextCapitalize, mode: 'insensitive' } }
      ]
    },
    take: 5
  })
  return NextResponse.json(products)
}