'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Badge } from './badge'
import { Checkbox } from './checkbox'

import { labels, priorities, statuses } from '../../data/data'
import { Ticket } from '@/data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: 'code',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Código" />,
    cell: ({ row }) => <div className="w-[40px]">{row.getValue('code')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nome" />,
    cell: ({ row }) => <div className="w-[140px]">{row.getValue('name')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title="E-mail" />,
    cell: ({ row }) => <div className="w-[120px]">{row.getValue('email')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'whatsapp',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Whatsapp" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('whatsapp')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'verified',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Válido" />,
    cell: ({ row }) => {
      const value = row.getValue('verified')

      return (
        <div className="w-[40px]">
          {value ? <Badge variant="destructive">Não</Badge> : <Badge variant="success">Sim</Badge>}
        </div>
      )
    },
    enableSorting: false,
    enableHiding: false
  }

  // {
  //   id: 'actions',
  //   cell: ({ row }) => <DataTableRowActions row={row} />
  // }
]
