import { useState } from 'react'

import { fetchBalance } from '../api-client/actions'
import { RootContextType } from '../containers/RootContext'

type UseBalanceType = Pick<RootContextType, 'balance' | 'onFetchBalance'>

export const useBalance = (): UseBalanceType => {
  const [balance, setBalance] = useState<number>(0)

  const handleFetchBalance = async (): Promise<void> => {
    const value = await fetchBalance()
    setBalance(value)
  }

  return {
    balance,
    onFetchBalance: handleFetchBalance
  }
}
