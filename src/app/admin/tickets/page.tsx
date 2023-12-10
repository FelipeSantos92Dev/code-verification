import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'

import axios from 'axios'

export default async function Tickets() {
  const apiURL = 'http://localhost:3000/api/v1/tickets'
  const response = await axios.get(apiURL)

  const tickets = response.data
  console.log(tickets)

  return (
    <div>
      <DataTable data={tickets} columns={columns} />
    </div>
  )
}
