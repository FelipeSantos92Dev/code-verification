import axios from 'axios'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'

async function getTasks() {
  const response = await fetch('https://www.meusticketsoficial.com.br/api/v1/dash/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: { revalidate: 5 }
  })

  const data = await response.json()

  return data
}

export default async function Admin() {
  const tickets = await getTasks()

  return (
    <div className={'flex flex-col sm:flex-row justify-center gap-5 w-full'}>
      <Card className={`sm:w-1/4`}>
        <CardHeader>
          <CardTitle className={`text-center`}>Total de Ingressos Vendidos Online</CardTitle>
          <CardDescription className={`text-center`}>Plataforma MeusTickets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className={`text-center text-6xl`}>15</p>
        </CardContent>
      </Card>
      <Card className={`sm:w-1/4`}>
        <CardHeader>
          <CardTitle className={`text-center`}>Total de Ingressos Vendidos Portaria</CardTitle>
          <CardDescription className={`text-center`}>Portaria UNAMA BR</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className={`text-center text-6xl`}>15</p>
        </CardContent>
      </Card>
      <Card className={`sm:w-1/4`}>
        <CardHeader>
          <CardTitle className={`text-center`}>Público Presente</CardTitle>
          <CardDescription className={`text-center`}>CarnaGeek 2024</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className={`text-center text-6xl`}>{tickets.length}</p>
        </CardContent>
      </Card>
    </div>
  )
}
