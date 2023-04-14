import React from "react";
import { Link, useParams } from "react-router-dom";
import Items from "./Items";
import FilterBar from "./FilterBar";

export default function Shop({ addToCart, displayedItems, setSidebarFilter, ITEMS_PER_PAGE }) {
  let { currentPage } = useParams();
  if (currentPage === undefined) currentPage = 1;
  const lastPage = Math.ceil(displayedItems.length / ITEMS_PER_PAGE);
  const currentSection = Math.floor(currentPage / 10) * 10;
  const pageLinks = [];
  for (let i = currentSection; i < currentSection + 10; i++) {
    if (i > lastPage) break;
    if (i !== Number(currentPage)) pageLinks.push(<Link to={`/shop/${i}`} onClick={() => window.scrollTo(0, 0)} >{i}</Link>);
    else pageLinks.push(<b>{currentPage}</b>);
  }
  // Add ... and ...
  if (currentSection + 10 <= lastPage) pageLinks.push(<Link to={`/shop/${currentSection + 10}`} onClick={() => window.scrollTo(0, 0)} >...</Link>);
  if (currentSection > 0) pageLinks.unshift(<Link to={`/shop/${currentSection - 1}`} onClick={() => window.scrollTo(0, 0)} >...</Link>)
  else pageLinks.shift() // Remove "0" page
  // Add < and >
  pageLinks.unshift(<Link to={`/shop/1`} onClick={() => window.scrollTo(0, 0)} >{"<"}</Link>);
  pageLinks.push(<Link to={`/shop/${lastPage}`} onClick={() => window.scrollTo(0, 0)} >{">"}</Link>);


  return(
    <main className="shop">
      <FilterBar setSidebarFilter={setSidebarFilter}/>
      <div className="item-display">
        <Items displayedItems={displayedItems} addToCart={addToCart} ITEMS_PER_PAGE={ITEMS_PER_PAGE}/>
        {
          displayedItems.length !== 0 ?
            <div className="page-links">{pageLinks}</div> :
            null
        }
      </div>
    </main>
  )
}