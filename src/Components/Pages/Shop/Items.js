import React from "react";
import Item from "./Item";

export default function Items({ displayedItems, addToCart }) {
  const wrappedItems = displayedItems.map((itemInfo) => {
    return(
      <Item itemInfo={itemInfo} addToCart={addToCart}/>
    )
  })
  const emptyMsg = (
    <div className="empty-message">
      <span className="msg">Nothing found</span>
      <span className="magnifying-glass"></span>
    </div>
  )

  return(
    <div className="items">
      {displayedItems.length !== 0 ? wrappedItems : emptyMsg}
    </div>
  )
}