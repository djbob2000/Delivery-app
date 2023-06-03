import { useSelector, useDispatch } from "react-redux";
import { deleteCartGood } from "../../redux/cart/cart.slice";
import { useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  TextField,
} from "@mui/material";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const deleteItem = (id) => {
    dispatch(deleteCartGood({ id }));
  };

  return (
    <Card>
      <CardContent>
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
            <Grid item>
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="subtitle2">$ {item.price}</Typography>
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              type="number"
              variant="outlined"
              size="small"
              inputProps={{
                min: 1,
                max: 99,
                pattern: "[0-9]*",
                inputMode: "numeric",
              }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Grid>

          <Grid item>
            <Button variant="contained" onClick={() => deleteItem(item.id)}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
