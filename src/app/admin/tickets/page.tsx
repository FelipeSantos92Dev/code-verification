import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'
import axios from 'axios'

export default async function Tickets() {
  const apiURL = 'api/v1/tickets/'
  let data = []

  try {
    const response = await axios.get(apiURL)
    const tickets = response.data
    data = tickets
  } catch (err) {
    console.log(err)
  }

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}
