import React, { FC, useEffect } from 'react'
import { Stack, Typography } from '@mui/material'

import { useRootContext } from './RootContext'
import { Balance, Search } from '../components'

export const HeaderContainer: FC = () => {
  const { balance, onFetchBalance, onSetTitle } = useRootContext()

  useEffect(() => {
    onFetchBalance()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!balance) {
    return null
  }

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">Coin list</Typography>
      <Balance balance={balance} />
      <Search onChange={onSetTitle} />
    </Stack>
  )
}
