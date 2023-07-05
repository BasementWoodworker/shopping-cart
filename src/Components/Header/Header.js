import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { MobileMenu } from "./MobileMenu";

export default function Header({ allItems, setHideCart, cart, setSearchbarFilter }) {
  const cartSize = cart.reduce((summ, item) => summ += item.quantity, 0);
  return(
    <header>
      <Link to="/" id="shop-name">
        <div className="shop-logo"></div>
        <h1>Lumber store</h1>
      </Link>
      <div className="right-side">
        <SearchBar allItems={allItems} setSearchbarFilter={setSearchbarFilter}/>
        <nav className="pc-nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link className="cart-link" onClick={() => setHideCart(false)} >
            <div className="icon"></div>
            <div className="size">{cartSize}</div>
          </Link>
        </nav>
        <MobileMenu setHideCart={setHideCart} cartSize={cartSize} allItems={allItems} setSearchbarFilter={setSearchbarFilter} />
      </div>
    </header>
  )
}