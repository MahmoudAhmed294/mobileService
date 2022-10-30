import React from 'react'
import OrdersFilter from './components/OrdersFilter'
import { Box } from '@mui/material';
import Table from './components/Table';

type Props = {}

const Index = (props: Props) => {
  return (
    <Box sx={{mt:3}}>
      <OrdersFilter/>
      <Table />
    </Box>
  )
}

export default Index