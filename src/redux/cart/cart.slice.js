import { createSlice } from "@reduxjs/toolkit";
import { cartInitState } from "./cart.initState";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    addToCart(state, { payload }) {
      payload = { ...payload, quantity: "1" };
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
    incrementQuantity: (state, { payload }) => {
      state.cartGoods = state.cartGoods.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: Number(item.quantity) + 1 };
        }
        return item;
      });
    },
    decrementQuantity: (state, { payload }) => {
      state.cartGoods = state.cartGoods.map((item) => {
        if (item.id === payload.id) {
          const newQuantity = Number(item.quantity) - 1;
          const quantity = newQuantity < 1 ? 1 : newQuantity;
          return { ...item, quantity };
        }
        return item;
      });
    },
    setQuantity: (state, { payload }) => {
      console.log("🚀 ~ file: cart.slice.js:43 ~ payload:", payload);
      state.cartGoods = state.cartGoods.map((item) => {
        if (item.id === payload.id) {
          const newQuantity = Number(payload.quantity);
          const quantity = newQuantity < 1 ? 1 : newQuantity;
          return { ...item, quantity };
        }
        return item;
      });
    },
    deleteCartGood(state, { payload }) {
      state.cartGoods = state.cartGoods.filter((item) => {
        return item.id !== payload.id;
      });
    },
  },
});
export const {
  addToCart,
  resetCart,
  deleteCartGood,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
} = cartSlice.actions;

const persistConfig = {
  key: "cartGoods",
  storage,
  whitelist: ["cartGoods"],
};

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);
