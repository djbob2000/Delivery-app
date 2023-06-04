import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { HistoryItemOrder } from "../HistoryItemOrder/HistoryItemOrder";

export const HistoryItem = ({ item }) => {
  const total = item.order.reduce((acc, item) => {
    return acc + parseFloat(item.price) * parseFloat(item.quantity);
  }, 0);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="subtitle1">Order ID: {item.id}</Typography>
            <Typography variant="subtitle1">Name: {item.name}</Typography>
            <Typography variant="subtitle1">E-mail: {item.email}</Typography>
            <Typography variant="subtitle1">Phone: {item.phone}</Typography>
            <Typography variant="subtitle1">Address: {item.address}</Typography>
          </Grid>
          <Grid item>
            <List>
              {item.order.map((itemOrder) => (
                <ListItem key={itemOrder.id}>
                  <HistoryItemOrder itemOrder={itemOrder} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">TOTAL: ${total}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
