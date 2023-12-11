import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'
import axios from 'axios'

export default async function Tickets() {
  const apiURL = 'https://www.meusticketsoficial.com.br/api/v1/tickets/'
  let tickets = []

  try {
    const response = await axios.get(apiURL)
    const { data } = response
    tickets = data
  } catch (err) {
    console.log(err)
  }
  return <DataTable data={tickets} columns={columns} />
}
