import { OrderForm } from "../OrderForm/OrderForm";
import { CartList } from "../CartList/CartList";
import { TotalPrice } from "../TotalPrice/TotalPrice";
import { OrderButton } from "../OrderButton/OrderButton";
import { Box, Typography } from "@mui/material";
import {
  selectCartGoodsByShopId,
  selectCurrentShopID,
} from "../../redux/selectors";
import { useSelector } from "react-redux";
import { shopsData } from "../../constants/shopsData";

export const Cart = () => {
  const selectedCartGoodsByShopId = useSelector(selectCartGoodsByShopId);
  const CurrentShopID = useSelector(selectCurrentShopID);
  const currentShop = shopsData.find((shop) => shop.id === CurrentShopID);

  return (
    <>
      {selectedCartGoodsByShopId.length ? (
        <>
          <Box sx={{ mb: 4 }}>
            Your current store is{" "}
            <strong>{currentShop ? currentShop.name : "Unknown"}</strong>. If
            you need another, select it on the shop page.
          </Box>
          <Box display="flex">
            <OrderForm />
            <CartList items={selectedCartGoodsByShopId} />
          </Box>
          <Box display="flex" justifyContent="flex-end" gap="1rem">
            <TotalPrice />
            <OrderButton />
          </Box>
        </>
      ) : (
        <Typography variant="body1">
          No items in your cart, please go to SHOP and add goods to cart
        </Typography>
      )}
    </>
  );
};
