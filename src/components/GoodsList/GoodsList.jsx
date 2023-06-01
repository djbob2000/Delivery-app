import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../../redux/goods/goods.operations";
import { resetGoods } from "../../redux/goods/goods.slice";
import { selectGoods } from "../../redux/selectors";
import { selectCurrentShopID } from "../../redux/selectors";
import { Grid, Button, Skeleton } from "@mui/material";

export const GoodsList = () => {
  const dispatch = useDispatch();
  const selectedGoods = useSelector(selectGoods);
  console.log("selectedGoods==", selectedGoods);
  const currentShopID = useSelector(selectCurrentShopID);

  useEffect(() => {
    dispatch(resetGoods());
    dispatch(fetchGoods());
  }, [dispatch, currentShopID]);

  return (
    <>
      <Grid container spacing={2}>
        {selectedGoods.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            {item ? (
              <img src={item.image} alt={item.title} />
            ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )}
            <div>{item.title}</div>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
