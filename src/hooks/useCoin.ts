import { useState } from 'react'

import { fetchCoinPrice, fetchTransfer } from '../api-client/actions'
import { Coin, RootContextType, TransferData } from '../containers/RootContext'

type UseCoinType = Pick<
  RootContextType,
  'coin' | 'price' | 'transfer' | 'onFetchTransfer' | 'onFetchPrice' | 'onSetCoin' | 'onResetCoin'
>

export const useCoin = (): UseCoinType => {
  const [coin, setCoin] = useState<Coin>(null)
  const [price, setPrice] = useState<number>(null)
  const [transfer, setTransfer] = useState<TransferData>(null)

  const handleFetchPrice = async (id: number): Promise<void> => {
    const priceValue = await fetchCoinPrice(id)
    setPrice(priceValue)
  }
  const handleFetchTransfer = async (id: number, amount: number): Promise<void> => {
    const data = await fetchTransfer(id, amount)
    setTransfer(data)
  }

  const handleSetCoin = (coin: Coin): void => {
    setCoin(coin)
  }
  const handleResetCoin = (): void => {
    setCoin(null)
    setPrice(null)
    setTransfer(null)
  }

  return {
    coin,
    price,
    transfer,
    onFetchTransfer: handleFetchTransfer,
    onFetchPrice: handleFetchPrice,
    onSetCoin: handleSetCoin,
    onResetCoin: handleResetCoin
  }
}
