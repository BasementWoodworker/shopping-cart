import React from "react";
import Item from "./Item";

export default function Items({ items, cart, setCart }) {
  const wrappedItems = items.map((itemInfo) => {
    return(
      <Item itemInfo={itemInfo} cart={cart} setCart={setCart}/>
    )
  })
  return(
    <div className="items">
      {wrappedItems}
    </div>
  )
}