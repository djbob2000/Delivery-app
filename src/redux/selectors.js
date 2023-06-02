import { createSelector } from "@reduxjs/toolkit";

export const selectGoods = (state) => state.goods.goods;
export const selectCartGoods = (state) => state.cartGoods.cartGoods;
export const selectCurrentShopID = (state) => state.goods.currentShopID;

export const selectCartGoodsByShopId = createSelector(
  selectCartGoods,
  selectCurrentShopID,
  (cartGoods, currentShopID) =>
    cartGoods.filter((item) => item.shopId === currentShopID)
);
