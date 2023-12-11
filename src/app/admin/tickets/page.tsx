import CodeForm from '@/app/components/code-form'
import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'
import axios from 'axios'

async function getTasks() {
  const response = await axios.get('https://www.meusticketsoficial.com.br/api/v1/tickets/')
  const tickets = response.data

  return tickets
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
