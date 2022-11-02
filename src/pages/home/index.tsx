import React from "react";
import OrdersFilter from "./components/OrdersFilter";
import { Box, CircularProgress, Stack } from "@mui/material";
import Table from "./components/Table";
import { useOrderMutation } from "../../api/orders";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { addMessage } from "../../store/alertsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { getOrders, setOrder } from "../../store/orderSlice";

type Props = {};

const Index = (props: Props) => {
  const dispatch = useAppDispatch();
  const allOrders = useAppSelector(getOrders);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  const [order, { data, isLoading, error, isError, isSuccess }]: any =
    useOrderMutation();

  useEffect(() => {
    if (cookies.token) {
      order("");
      if (isError) {
        dispatch(
          addMessage({
            type: "error",
            message: `${JSON.stringify(error.data)}`,
          })
        );
      }
    } else {
      navigate("/", { replace: true });
    }
  }, [cookies]);
  useEffect(() => {
    if (data) {
      
      dispatch(setOrder(data))
    }
  }, [data]);

  return (
    <Box sx={{ mt: 3 }}>
      <OrdersFilter />
      <Table isLoading={isLoading} data={allOrders} />
    </Box>
  );
};

export default Index;
