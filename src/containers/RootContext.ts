import React, { createContext, useContext } from 'react'

export type Coin = {
  id: number,
  title: string,
  network: number,
  status: number
}
export type CoinsData = {
  data: Array<Coin>,
  meta: {
    page: number,
    limit: number,
    total: number,
    page_count: number
  }
}

export type Params = {
  page: number,
  limit: number,
  title: string
}

export type TransferData = {
  status: number,
  errors?: Array<string>
}

export type RootContextType = {
  balance: number,
  coinsData: CoinsData,
  params: Params,
  coin: Coin,
  price: number,
  transfer: TransferData,
  open: boolean,
  onFetchData: (params: Params) => Promise<void>,
  onFetchBalance: () => Promise<void>,
  onFetchPrice: (id: number) => Promise<void>,
  onFetchTransfer: (id: number, amount: number) => Promise<void>,
  onSetPage: (event: React.MouseEvent, page: number) => void,
  onSetLimit: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  onSetTitle: (title: string) => void,
  onSetCoin: (coin: Coin) => void,
  onResetCoin: () => void
}

export const RootContext = createContext<RootContextType>({
  balance: null,
  coinsData: null,
  params: null,
  coin: null,
  price: null,
  transfer: null,
  open: false,
  onFetchData: null,
  onFetchPrice: null,
  onFetchBalance: null,
  onFetchTransfer: null,
  onSetPage: null,
  onSetLimit: null,
  onSetTitle: null,
  onSetCoin: null,
  onResetCoin: null
})
export const useRootContext = (): RootContextType => useContext<RootContextType>(RootContext)
