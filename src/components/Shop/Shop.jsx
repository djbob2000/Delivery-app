import React, { useState } from "react";

const shopsData = [
  { id: 1, name: "Shop 1" },
  { id: 2, name: "Shop 2" },
  { id: 3, name: "Shop 3" },
];

const goodsData = [
  { id: 1, shopId: 1, title: "Product 1", image: "product1.jpg", price: 111 },
  { id: 2, shopId: 1, title: "Product 2", image: "product2.jpg", price: 111 },
  { id: 3, shopId: 2, title: "Product 3", image: "product3.jpg", price: 111 },
  { id: 4, shopId: 3, title: "Product 4", image: "product4.jpg", price: 111 },
];

export function ShopPage() {
  const [selectedShopId, setSelectedShopId] = useState(null);

  const handleShopClick = (shopId) => {
    setSelectedShopId(shopId);
  };

  const selectedGoods = goodsData.filter(
    (item) => item.shopId === selectedShopId
  );

  return (
    <div>
      <div>
        {shopsData.map((shop) => (
          <div key={shop.id} onClick={() => handleShopClick(shop.id)}>
            {shop.name}
          </div>
        ))}
      </div>
      <div>
        {selectedGoods.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>{item.title}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
