import { NextResponse } from 'next/server'

import prisma from '@/lib/prisma'
import { addHours } from 'date-fns'

export async function GET(req: Request, { params }: { params: { code: string } }) {
  try {
    if (!params.code) {
      return new NextResponse('Id do código é obrigatório', { status: 400 })
    }

    const ticket = await prisma.ticket.findUnique({
      where: {
        code: params.code
      }
    })

    if (!ticket) {
      return new NextResponse('Ingresso não encontrado', { status: 404 })
    }

    return NextResponse.json(ticket)
  } catch (error) {
    console.log('[TICKET_GET]', error)
    return new NextResponse('Erro de servidor', { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { code: string } }) {
  try {
    if (!params.code) {
      return new NextResponse('Id do código é obrigatório', { status: 400 })
    }

    const findTicket = await prisma.ticket.findUnique({
      where: {
        code: params.code
      }
    })

    if (!findTicket) {
      return new NextResponse('Ingresso não encontrado', { status: 404 })
    }

    const ticket = await prisma.ticket.delete({
      where: {
        code: params.code
      }
    })

    return NextResponse.json(ticket)
  } catch (error) {
    console.log('[TICKET_DELETE]', error)
    return new NextResponse('Erro de servidor', { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: { code: string } }) {
  try {
    const body = await req.json()

    const { name, email, whatsapp } = body

    if (!name || !email || !whatsapp) {
      return new NextResponse('Parâmetros incompletos!', { status: 400 })
    }

    if (!params.code) {
      return new NextResponse('Id do código é obrigatório', { status: 400 })
    }

    const findTicket = await prisma.ticket.findUnique({
      where: {
        code: params.code
      }
    })

    if (!findTicket) {
      return new NextResponse('Ingresso não encontrado', { status: 404 })
    }

    const ticket = await prisma.ticket.update({
      where: {
        code: params.code
      },
      data: {
        name,
        email,
        whatsapp,
        updatedAt: addHours(new Date(), -3)
      }
    })

    return NextResponse.json(ticket)
  } catch (error) {
    console.log('[TICKET_PATCH]', error)
    return new NextResponse('Erro de servidor', { status: 500 })
  }
}
