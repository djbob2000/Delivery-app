import { useDispatch } from "react-redux";
import {
  deleteCartGood,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
} from "../../redux/cart/cart.slice";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(deleteCartGood({ id }));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleSetQuantity = (id, quantity) => {
    dispatch(setQuantity({ id, quantity }));
  };

  return (
    <Card>
      <CardContent style={{ position: "relative" }}>
        <IconButton
          onClick={() => deleteItem(item.id)}
          size="small"
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <CancelIcon sx={{ color: "red" }} />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              src={item.image}
              alt={item.title}
              style={{ maxWidth: "200px" }}
            />
          </Grid>

          <Grid item xs={12} sm container direction="column">
            <Typography variant="subtitle1">{item.title}</Typography>
            <Typography variant="subtitle2">$ {item.price}</Typography>
            <TextField
              type="number"
              variant="outlined"
              value={item.quantity}
              onChange={(e) => handleSetQuantity(item.id, e.target.value)}
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" },
                },
                startAdornment: (
                  <IconButton
                    onClick={() => handleDecrement(item.id)}
                    size="small"
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                ),
                endAdornment: (
                  <IconButton
                    onClick={() => handleIncrement(item.id)}
                    size="small"
                  >
                    <AddCircleIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
