import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

export default function Items({ displayedItems, addToCart, ITEMS_PER_PAGE }) {
  let { currentPage } = useParams();
  if (currentPage === undefined) currentPage = 1;
  const pageItems = displayedItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE - 1);
  const wrappedItems = pageItems.map((itemInfo) => {
    return(
      <Item itemInfo={itemInfo} addToCart={addToCart} key={itemInfo.id}/>
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
      {pageItems.length !== 0 ? wrappedItems : emptyMsg}
    </div>
  )
}