import React, { FC } from 'react'
import { Modal } from '@mui/material'

import { useRootContext } from './RootContext'
import { CoinModal } from '../components'

export const ModalContainer: FC = () => {
  const { balance, open, onResetCoin, coin, price, onFetchTransfer } = useRootContext()

  return (
    <Modal open={open} onClose={onResetCoin}>
      <CoinModal
        balance={balance}
        coin={coin}
        price={price}
        onClose={onResetCoin}
        onFetchTransfer={onFetchTransfer}
      />
    </Modal>
  )
}
