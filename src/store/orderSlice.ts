import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderResponse } from "../api/types";
import { RootState } from "./store";

interface  OrdersState {
  orders: OrderResponse[]
}
const initialState:OrdersState = {
  orders:[]
  };

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state , action:PayloadAction<OrderResponse | any>) => {
      state.orders =action.payload
    },
  },
});

export const { setOrder } = orderSlice.actions;
export const getOrders =(state: RootState) => state.orders.orders
export default orderSlice.reducer;
