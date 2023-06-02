import { CartItem } from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import {
  selectCartGoodsByShopId,
  selectCartGoods,
} from "../../redux/selectors";
import { Typography, List, ListItem } from "@mui/material";

export const CartList = () => {
  const selectedCartGoods = useSelector(selectCartGoods);
  console.log(
    "🚀 ~ file: CartList.jsx:11 ~ CartList ~ selectedCartGoods:",
    selectedCartGoods
  );

  const selectedCartGoodsByShopId = useSelector(selectCartGoodsByShopId);
  console.log(
    "🚀 ~ file: CartList.jsx:8 ~ CartList ~ selectedCartGoodsByShopId:",
    selectedCartGoodsByShopId
  );

  return (
    <List>
      {selectedCartGoods.length ? (
        selectedCartGoods.map((item) => (
          <ListItem key={item.id}>
            <CartItem item={item} />
          </ListItem>
        ))
      ) : (
        <Typography variant="body1">No items in your cart</Typography>
      )}
    </List>
  );
};
