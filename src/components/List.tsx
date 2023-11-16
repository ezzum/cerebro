import React, { FC } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'

import { Coin, CoinsData } from '../containers/RootContext'

type ListProps = {
  list: CoinsData['data'],
  count: number,
  page: number,
  limit: number,
  onPageChange: (event: React.MouseEvent | null, page: number) => void,
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  onClickRow: (coin: Coin) => void
}

const columns = [
  { field: 'id', name: 'ID' },
  { field: 'title', name: 'Title' },
  { field: 'network', name: 'Network' },
  { field: 'status', name: 'Status' }
]

export const List: FC<ListProps> = ({
  list,
  count,
  page,
  limit,
  onPageChange,
  onRowsPerPageChange,
  onClickRow
}) => {
  const handleClickRow = (coin: Coin) => () => {
    onClickRow(coin)
  }

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(({ id, title, status, network }) => (
              <TableRow
                key={id}
                sx={{ cursor: 'pointer' }}
                hover
                onClick={handleClickRow({ id, title, status, network })}
              >
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{network}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={count}
                page={page}
                rowsPerPage={limit}
                onPageChange={onPageChange}
                rowsPerPageOptions={[5, 10]}
                onRowsPerPageChange={onRowsPerPageChange}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  )
}
