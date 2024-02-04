import axios from 'axios'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'

const url = 'https://www.meusticketsoficial.com.br/api/v1/tickets/'

async function getTasks() {
  const response = await axios.get(url)
  const tickets = response.data

  return tickets
}

const Dashboard = async () => {
  const tickets = await getTasks()
  //console.log('Tickets', tickets)

  const portaria = tickets.filter((ticket: any) => ticket.name === 'Portaria')
  //console.log('Pertaria', portaria)

  const presentes = tickets.filter((ticket: any) => ticket.name === 'Validado na portaria')
  //console.log('Presentes', presentes)

  return (
    <div className={'flex flex-col sm:flex-row justify-center gap-5 w-full'}>
      <Card className={`sm:w-1/4`}>
        <CardHeader>
          <CardTitle className={`text-center`}>Total de Ingressos Vendidos Online</CardTitle>
          <CardDescription className={`text-center`}>Plataforma MeusTickets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className={`text-center text-6xl`}>90</p>
        </CardContent>
      </Card>
      <Card className={`sm:w-1/4`}>
        <CardHeader>
          <CardTitle className={`text-center`}>Total de Ingressos Vendidos Portaria</CardTitle>
          <CardDescription className={`text-center`}>Portaria UNAMA BR</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className={`text-center text-6xl`}>{portaria.length}</p>
        </CardContent>
      </Card>
      <Card className={`sm:w-1/4`}>
        <CardHeader>
          <CardTitle className={`text-center`}>Público Presente</CardTitle>
          <CardDescription className={`text-center`}>CarnaGeek 2024</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className={`text-center text-6xl`}>{presentes.length}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
