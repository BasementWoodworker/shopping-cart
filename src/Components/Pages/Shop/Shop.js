import React, { useState } from "react";
import Items from "./Items";
import FilterBar from "./FilterBar";
import itemData from "../../../ItemData/ItemData.json";

export default function Shop({ addToCart }) {
  const [displayedItems, setDisplayedItems] = useState(itemData)

  return(
    <main className="shop">
      <FilterBar setDisplayedItems={setDisplayedItems}/>
      <Items displayedItems={displayedItems} addToCart={addToCart}/>
    </main>
  )
}