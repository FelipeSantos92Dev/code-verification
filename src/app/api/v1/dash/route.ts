import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        verified: true
      },
      orderBy: {
        code: 'asc'
      }
    })

    return new NextResponse(JSON.stringify(tickets), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.log('[TICKET_GET]', error)

    return new NextResponse('Algo deu errado', { status: 500 })
  }
}
