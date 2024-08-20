import { NextRequest, NextResponse } from "next/server"

import prisma from "@/prisma/prisma-client"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const user = await prisma.user.create({
    data: body
  })
  return NextResponse.json(user)
}