import { createSlice } from "@reduxjs/toolkit";
import { cartInitState } from "./cart.initState";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    addGood(state, { payload }) {
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
    deleteGood(state, { payload }) {
      const updatedCartGoods = state.cartGoods.filter(
        (item) => item.id !== payload.id
      );
      state.cartGoods = updatedCartGoods;
    },
  },
});
export const { addGood, resetCart, deleteGood } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
