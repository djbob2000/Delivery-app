import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/goods/goods.operations";
import { resetGoods } from "../../redux/goods/goods.slice";
import { selectGoods } from "../../redux/selectors";
import { selectCurrentShopID } from "../../redux/selectors";
import { Grid } from "@mui/material";
import { GoodsItem } from "../GoodsItem/GoodsItem";

export const GoodsList = () => {
  const selectedGoods = useSelector(selectGoods);
  const currentShopID = useSelector(selectCurrentShopID);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetGoods());
    dispatch(fetchGoods());
  }, [dispatch, currentShopID]);

  return (
    <>
      <Grid container spacing={2}>
        {selectedGoods.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <GoodsItem item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
