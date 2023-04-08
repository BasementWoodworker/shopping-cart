import React from "react";
import Item from "./Item";

export default function Items({ items }) {
  const wrappedItems = items.map((itemInfo) => {
    return(
      <Item itemInfo={itemInfo}/>
    )
  })
  return(
    <div className="items">
      {wrappedItems}
    </div>
  )
}