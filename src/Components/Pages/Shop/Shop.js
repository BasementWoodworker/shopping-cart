import React, { useState } from "react";
import Items from "./Items";
import FilterBar from "./FilterBar";

export default function Shop({ addToCart, displayedItems, setSidebarFilter }) {
  return(
    <main className="shop">
      <FilterBar setSidebarFilter={setSidebarFilter}/>
      <Items displayedItems={displayedItems} addToCart={addToCart}/>
    </main>
  )
}