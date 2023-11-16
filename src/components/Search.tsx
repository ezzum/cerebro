import React, { FC } from 'react'
import { Box, TextField } from '@mui/material'
import pDebounce from 'p-debounce'

type SearchProps = {
  onChange: (value: string) => void
}

export const Search: FC<SearchProps> = ({ onChange }) => {
  const handleSearch = pDebounce((event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }, 500)

  return (
    <Box>
      <TextField label="Search by title" size="small" onChange={handleSearch} />
    </Box>
  )
}
