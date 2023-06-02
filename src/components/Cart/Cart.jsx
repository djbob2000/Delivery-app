import { OrderForm } from "../OrderForm/OrderForm";
import { CartList } from "../CartList/CartList";
import { TotalPrice } from "../TotalPrice/TotalPrice";
import { OrderButton } from "../OrderButton/OrderButton";
import { Box } from "@mui/material";

export const Cart = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <OrderForm />
        <CartList />
      </Box>
      {/* <TotalPrice />
      <OrderButton /> */}
    </>
  );
};
