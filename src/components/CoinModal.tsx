import { FC, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

import { Coin } from '../containers/RootContext'

type CoinDetailProps = {
  balance: number,
  coin: Coin,
  price: number,
  onClose: () => void,
  onFetchTransfer: (id: number, amount: number) => void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #e0e0e0',
  boxShadow: 24,
  p: 4
}

export const CoinModal: FC<CoinDetailProps> = forwardRef(
  ({ balance, coin, price, onClose, onFetchTransfer }, ref: any) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = ({ amount }) => {
      onFetchTransfer(coin.id, amount)
    }

    const availableAmount = Math.floor(balance / price) as number

    return (
      <Box ref={ref} component="form" onSubmit={handleSubmit(onSubmit)} sx={style}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">
            {coin?.title} price: {price}
          </Typography>
          <IconButton onClick={onClose}>
            <CancelOutlinedIcon />
          </IconButton>
        </Stack>
        <Typography variant="subtitle1">Available amount (max {availableAmount}):</Typography>
        <Box sx={{ display: 'flex' }}>
          <TextField
            {...register('amount', { required: true })}
            fullWidth
            type="number"
            defaultValue={availableAmount}
            disabled={!availableAmount}
            autoFocus
            // inputProps={{
            //   max: availableAmount,
            //   min: 1,
            // }}
          />
          <Button sx={{ ml: 1 }} variant={'outlined'} disabled={!availableAmount} type="submit">
            Buy
          </Button>
        </Box>
      </Box>
    )
  }
)
