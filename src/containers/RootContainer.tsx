import React, { FC, ReactNode, useEffect } from 'react'

import { RootContext } from './RootContext'
import { useBalance, useCoin, useCoinsData, useParams } from '../hooks'

type RootProviderProps = {
  children: ReactNode
}

export const RootContainer: FC<RootProviderProps> = ({ children }) => {
  const { balance, onFetchBalance } = useBalance()
  const { coinsData, onFetchData } = useCoinsData()
  const { params, onSetPage, onSetLimit, onSetTitle } = useParams()
  const { coin, price, transfer, onFetchPrice, onFetchTransfer, onSetCoin, onResetCoin } = useCoin()

  useEffect(() => {
    onFetchData(params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  useEffect(() => {
    if (transfer?.status === 200) {
      onFetchBalance()
    }
  }, [onFetchBalance, transfer?.status])

  useEffect(() => {
    coin && onFetchPrice(coin.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coin])

  return (
    <RootContext.Provider
      value={{
        balance,
        coinsData,
        params,
        coin,
        price,
        transfer,
        open: Boolean(price),
        onFetchData,
        onFetchPrice,
        onFetchBalance,
        onFetchTransfer,
        onSetPage,
        onSetLimit,
        onSetTitle,
        onSetCoin,
        onResetCoin
      }}
    >
      {children}
    </RootContext.Provider>
  )
}
