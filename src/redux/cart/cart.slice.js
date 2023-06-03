import { createSlice } from "@reduxjs/toolkit";
import { cartInitState } from "./cart.initState";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    addToCart(state, { payload }) {
      const productId = payload.id;
      const existingProduct = state.cartGoods.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        return;
      } else {
        state.cartGoods.push(payload);
      }
    },
    resetCart: (state) => {
      state.cartGoods = [];
    },
    deleteCartGood(state, { payload }) {
      state.cartGoods = state.cartGoods.filter((item) => {
        return item.id !== payload.id;
      });
    },
  },
});
export const { addToCart, resetCart, deleteCartGood } = cartSlice.actions;

const persistConfig = {
  key: "cartGoods",
  storage,
  whitelist: ["cartGoods"],
};

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);
