import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'
import axios from 'axios'

export default async function Tickets() {
  const apiURL = '/api/v1/tickets'
  const response = await axios.get(apiURL)

  const tickets = response.data

  return (
    <div>
      <DataTable data={tickets} columns={columns} />
    </div>
  )
}
