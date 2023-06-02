import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deleteCartGood } from "../../redux/cart/cart.slice";
import { useState } from "react";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const deleteItem = (id) => {
    dispatch(deleteCartGood(id));
  };
  return (
    <>
      <img src={item.image} alt="{}" />
      <div>
        <div>
          <p> {item.name}</p>
          <p>{item.price}</p>
          <input
            type="number"
            onChange={setQuantity}
            step="1"
            min="1"
            max="99"
            id="quantity"
            name="quantity"
            value={quantity}
            pattern="[0-9]*"
            inputMode="numeric"
            width="10"
            height="10"
          />
        </div>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </>
  );
};
