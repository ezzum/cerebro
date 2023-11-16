import React, { FC } from 'react'

import { List } from '../components'
import { useRootContext } from './RootContext'

export const ListContainer: FC = () => {
  const { coinsData, params, onSetPage, onSetLimit, onSetCoin } = useRootContext()

  if (!coinsData) {
    return null
  }

  return (
    <List
      list={coinsData.data}
      count={coinsData.meta.total}
      page={params.page - 1}
      limit={params.limit}
      onPageChange={onSetPage}
      onRowsPerPageChange={onSetLimit}
      onClickRow={onSetCoin}
    />
  )
}
