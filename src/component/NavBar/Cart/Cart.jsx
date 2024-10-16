import { IconButton,Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'

const Cart = () => {
  return (
    <Typography variant="text" >
      Cart <IconButton color="inherit">{<ShoppingCartIcon />}</IconButton>
    </Typography>
  )
}

export default Cart
