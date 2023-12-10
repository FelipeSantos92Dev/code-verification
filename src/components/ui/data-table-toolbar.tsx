'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from './button'
import { Input } from './input'
import { DataTableViewOptions } from './data-table-view-options'

import { priorities, statuses } from '../../data/data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Pesquisar código..."
          value={(table.getColumn('code')?.getFilterValue() as string) ?? ''}
          onChange={event => table.getColumn('code')?.setFilterValue(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/*  {table.getColumn('priority') && (
          <DataTableFacetedFilter column={table.getColumn('priority')} title="Critérios" options={priorities} />
        )} */}
        {table.getColumn('email') && (
          <DataTableFacetedFilter column={table.getColumn('email')} title="E-mail" options={statuses} />
        )}
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Limpar
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
