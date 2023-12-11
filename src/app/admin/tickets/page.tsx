import { DataTable } from '@/components/data-table'
import { columns } from '@/components/ui/columns'

export default function Tickets() {
  return (
    <div>
      <DataTable columns={columns} />
    </div>
  )
}
