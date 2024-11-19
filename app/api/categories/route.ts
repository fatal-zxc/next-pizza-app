import { NextResponse } from 'next/server'

import prisma from '@/prisma/prisma-client'

export async function GET() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          productVariant: true,
        },
      },
    },
  })
  return NextResponse.json(categories)
}
