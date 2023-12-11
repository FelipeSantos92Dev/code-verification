import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'
import axios from 'axios'

export default async function Tickets() {
  const response = await axios.get('https://www.meusticketsoficial.com.br/api/v1/tickets/')
  const tickets = response.data

  return <DataTable data={tickets} columns={columns} />
}
