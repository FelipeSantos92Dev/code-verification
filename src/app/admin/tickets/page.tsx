import CodeForm from '@/app/components/code-form'
import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'
import axios from 'axios'

async function getTasks() {
  const response = await fetch('https://www.meusticketsoficial.com.br/api/v1/tickets/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: { revalidate: 5 }
  })

  const data = await response.json()

  return data
}

export default async function Tickets() {
  const tickets = await getTasks()

  return (
    <>
      <CodeForm />
      <DataTable data={tickets} columns={columns} />
    </>
  )
}
