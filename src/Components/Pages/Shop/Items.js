import React from "react";
import Item from "./Item";

export default function Items({ displayedItems, addToCart }) {
  const wrappedItems = displayedItems.map((itemInfo) => {
    return(
      <Item itemInfo={itemInfo} addToCart={addToCart}/>
    )
  })
  return(
    <div className="items">
      {wrappedItems}
    </div>
  )
}