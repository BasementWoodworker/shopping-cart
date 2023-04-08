import React from "react";
import Items from "./Items";
import FilterBar from "./FilterBar";
import itemData from "../../ItemData/ItemData.json";

export default function Shop() {
  return(
    <main className="shop">
      <FilterBar/>
      <Items items={itemData}/>
    </main>
  )
}