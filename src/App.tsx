import React, { FC } from 'react'
import { Box } from '@mui/material'

import {
  RootContainer,
  HeaderContainer,
  ListContainer,
  ModalContainer,
  NotificationContainer,
} from './containers'

const App: FC = () => {
  return (
    <Box p={2}>
      <RootContainer>
        <HeaderContainer />
        <ListContainer />
        <ModalContainer />
        <NotificationContainer />
      </RootContainer>
    </Box>
  )
}

export default App
