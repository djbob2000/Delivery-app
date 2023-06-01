import { ShopsList } from "../ShopsList/ShopsList";
import { GoodsList } from "../GoodsList/GoodsList";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Box display="flex">
        <ShopsList />
        <GoodsList />
      </Box>{" "}
    </>
  );
};
