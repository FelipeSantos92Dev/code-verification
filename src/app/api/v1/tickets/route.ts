import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { addHours } from 'date-fns'

export async function GET() {
  try {
    const tickets = await prisma.ticket.findMany({
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

export async function POST(req: NextRequest) {
  // const { code } = await req.json()
  const { quantity } = await req.json()

  try {
    const tickets = []

    for (let i = 0; i < quantity; i++) {
      const ticket = await prisma.ticket.create({
        data: {
          code: Math.random().toString(36).substring(7),
          name: `Portaria`,
          verified: true,
          createdAt: addHours(new Date(), -3),
          updatedAt: addHours(new Date(), -3)
        }
      })

      tickets.push(ticket)
    }

    return new NextResponse(JSON.stringify(tickets), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // try {
    //   // Create ticket
    //   const ticket = await prisma?.ticket.create({
    //     data: {
    //       code,
    //       createdAt: addHours(new Date(), -3),
    //       updatedAt: addHours(new Date(), -3)
    //     }
    //   })

    //   if (!ticket) {
    //     return new NextResponse('Erro ao criar ingresso', { status: 500 })
    //   }

    //   return new NextResponse(JSON.stringify(ticket), {
    //     status: 200,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
  } catch (error) {
    console.log('[TICKET_POST]', error)

    return new NextResponse('Algo deu errado', { status: 500 })
  }
}
