import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";

export const HistoryItemOrder = ({ itemOrder }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              component="img"
              src={itemOrder.image}
              alt={itemOrder.title}
              style={{ maxWidth: "100px" }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">{itemOrder.title}</Typography>
            <Typography variant="subtitle2">$ {itemOrder.price}</Typography>
            <Typography variant="subtitle2">
              Qty: {itemOrder.quantity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
