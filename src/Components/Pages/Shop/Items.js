import React from "react";
import Item from "./Item";

export default function Items({ displayedItems, cart, setCart }) {
  const wrappedItems = displayedItems.map((itemInfo) => {
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