import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { selectCartGoodsByShopId } from "../../redux/selectors";

export const TotalPrice = () => {
  const CartGoodsByShopId = useSelector(selectCartGoodsByShopId);

  const totalPrice = CartGoodsByShopId.reduce((total, item) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);

  return (
    <div>
      <Typography variant="h6" component="h2">
        Total: ${totalPrice.toFixed(2)}
      </Typography>
    </div>
  );
};
