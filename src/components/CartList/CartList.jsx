import { CartItem } from "../CartItem/CartItem";
import { List, ListItem } from "@mui/material";

export const CartList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <CartItem item={item} />
        </ListItem>
      ))}
    </List>
  );
};
