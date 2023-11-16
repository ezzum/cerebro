import { FC } from 'react'

import { Notification } from '../components'
import { useRootContext } from './RootContext'

export const NotificationContainer: FC = () => {
  const { transfer } = useRootContext()

  return <Notification {...transfer} />
}
