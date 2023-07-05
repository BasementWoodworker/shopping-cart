import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

export function MobileMenu({ cartSize, setHideCart, allItems, setSearchbarFilter }) {
  const [isClosed, setIsClosed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsClosed(true);
  }, [location])

  return(
    <div className="open-mobile-menu" onClick={() => setIsClosed(false)}>
      <div className={`mobile-menu ${isClosed ? "closed" : ""}`} onClick={e => e.stopPropagation()}>
        <button className="close-mobile-menu" onClick={() => setIsClosed(true)}></button>
        <SearchBar allItems={allItems} setSearchbarFilter={setSearchbarFilter}/>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link className="cart-link-mobile" onClick={() => setHideCart(false)} >
          <span>Cart </span>
          <span className="size">{"(" + cartSize + ")"}</span>
        </Link>
      </div>
    </div>
  )
}