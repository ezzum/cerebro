import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { equals, head, not } from 'ramda'

type NotificationProps = {
  status?: number,
  errors?: Array<string>
}

const is422 = equals(422)
const is200 = equals(200)

const style = {
  top: 30,
  left: '50%',
  transform: 'translate(-50%)',
  width: 'fitContent',
  p: 2,
  zIndex: 1400,
  position: 'absolute',
  backgroundColor: '#fff'
}

export const Notification: FC<NotificationProps> = ({ status, errors }) => {
  if (not(status)) return null

  return (
    <Box sx={style}>
      {is422(status) && <Typography variant="subtitle1">Error: {head(errors)}</Typography>}
      {is200(status) && <Typography variant="subtitle1">Transfer is success</Typography>}
    </Box>
  )
}
