import { useState } from 'react'

import { fetchCoins } from '../api-client/actions'
import { CoinsData, Params, RootContextType } from '../containers/RootContext'

type UseCoinsDataType = Pick<RootContextType, 'coinsData' | 'onFetchData'>

export const useCoinsData = (): UseCoinsDataType => {
  const [coinsData, setCoinsData] = useState<CoinsData>(null)

  const handleFetchData = async (params: Params): Promise<void> => {
    const data = await fetchCoins(params)
    setCoinsData(data)
  }

  return {
    coinsData,
    onFetchData: handleFetchData,
  }
}
