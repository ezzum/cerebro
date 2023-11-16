import { FC } from 'react'
import { Typography } from '@mui/material'

type HeaderProps = {
  balance: number
}

export const Balance: FC<HeaderProps> = ({ balance }) => (
  <Typography variant="h6">Balance: {balance}</Typography>
)
