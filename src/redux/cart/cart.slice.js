import { createSlice } from "@reduxjs/toolkit";
import { cartInitState } from "./cart.initState";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    addToCart(state, { payload }) {
      console.log("🚀 ~ file: cart.slice.js:9 ~ addToCart ~ payload:", payload);
      const productId = payload.id;
      if (state.cartGoods.hasOwnProperty(productId)) {
        return;
      } else {
        state.cartGoods.push(payload);
      }
    },
    resetCart: (state) => {
      state.cartGoods = [];
    },
    deleteCartGood(state, { payload }) {
      const updatedCartGoods = state.cartGoods.filter(
        (item) => item.id !== payload.id
      );
      state.cartGoods = updatedCartGoods;
    },
  },
});
export const { addToCart, resetCart, deleteCartGood } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
