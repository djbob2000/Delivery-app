import { Button, Skeleton, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cart/cart.slice";
import { useDispatch } from "react-redux";

export const GoodsItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      {item?.image ? (
        <div>
          <img src={item.image} alt={item.title} style={{ width: "100%" }} />
          <Typography variant="h6" component="div" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Price: {item.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(addToCart({ ...item }));
              toast.success("Order added to cart successfully");
            }}
          >
            Add to Cart
          </Button>
        </div>
      ) : (
        <Skeleton variant="rectangular" width="100%" height="275px" />
      )}
    </>
  );
};
