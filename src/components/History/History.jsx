import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrders } from "../../redux/orders/orders.slice";
import { fetchOrders } from "../../redux/orders/orders.operations";
import { selectOrders } from "../../redux/selectors";
import { Box, Typography } from "@mui/material";
import { HistoryList } from "../HistoryList/HistoryList";

export const History = () => {
  const dispatch = useDispatch();
  const selectedOrders = useSelector(selectOrders);
  console.log(
    "🚀 ~ file: History.jsx:10 ~ History ~ selectedOrders:",
    selectedOrders
  );

  useEffect(() => {
    dispatch(resetOrders());
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      {selectedOrders.length ? (
        <HistoryList items={selectedOrders} />
      ) : (
        <Typography variant="body1">No orders hystory!</Typography>
      )}
    </>
  );
};
