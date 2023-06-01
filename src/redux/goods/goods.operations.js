import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

import axios from "axios";

axios.defaults.baseURL = "https://6478c67c362560649a2e6f1a.mockapi.io/";

export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (_, thunkAPI) => {
    try {
      const { currentShopID } = thunkAPI.getState().goods;

      const { data } = await axios.get("/goods", {
        params: {
          page: 1,
          limit: 30,
          shopId: currentShopID,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
