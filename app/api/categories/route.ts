import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/prisma/prisma-client'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const priceFrom = searchParams.get('priceFrom')
  const priceTo = searchParams.get('priceTo')

  const categories = await prisma.category.findMany({
    where: {
      products: {
        some: {
          productVariant: {
            some: {
              price: {
                gte: priceFrom ? parseInt(priceFrom) : 0,
                lte: priceTo ? parseInt(priceTo) : 1500,
              },
            },
          },
        },
      },
    },
    include: {
      products: {
        include: {
          productVariant: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
  })

  return NextResponse.json(categories)
}
