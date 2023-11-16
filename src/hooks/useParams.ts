import React, { useState } from 'react'
import { inc } from 'ramda'

import { Params, RootContextType } from '../containers/RootContext'

type UseParamsType = Pick<RootContextType, 'params' | 'onSetPage' | 'onSetLimit' | 'onSetTitle'>

export const useParams = (): UseParamsType => {
  const [params, setParams] = useState<Params>({
    page: 1,
    limit: 5,
    title: '',
  })

  const handleSetPage = (event: React.MouseEvent, page: number): void => {
    event.stopPropagation()
    setParams({ ...params, page: inc(page) })
  }

  const handleSetLimit = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void => {
    event.stopPropagation()
    const limit = parseInt(event.target.value, 10)
    setParams({ ...params, limit, page: 1 })
  }

  const handleSetTitle = (title: string): void => {
    setParams({ ...params, title, page: 1 })
  }

  return {
    params,
    onSetPage: handleSetPage,
    onSetLimit: handleSetLimit,
    onSetTitle: handleSetTitle,
  }
}
