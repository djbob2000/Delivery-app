import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentShop } from "../../redux/goods/goods.slice";
import { selectCurrentShopID } from "../../redux/selectors";
import { List, ListItem, Button } from "@mui/material";

const shopsData = [
  { id: 1, name: "RapidBurger" },
  { id: 2, name: "TurboTaco" },
  { id: 3, name: "ExpressPizza" },
];

export const ShopsList = () => {
  const dispatch = useDispatch();

  const currentShopID = useSelector(selectCurrentShopID);

  const handleShopClick = (shopId) => {
    console.log(shopId);
    dispatch(setCurrentShop(shopId));
  };

  return (
    <>
      <div>
        <List>
          {shopsData.map((shop) => (
            <ListItem key={shop.id}>
              <Button
                onClick={() => handleShopClick(shop.id)}
                sx={{
                  color: currentShopID === shop.id ? "primary.main" : "inherit",
                }}
              >
                {shop.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
