import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

export default function Header({ setHideCart, cart, setSearchbarFilter }) {
  const cartSize = cart.reduce((summ, item) => summ += item.quantity, 0);
  return(
    <header>
      <a href="/" id="shop-name"></a>
      <nav>
        <SearchBar setSearchbarFilter={setSearchbarFilter}/>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link className="cart-link" onClick={() => setHideCart(false)} >
          <div className="icon"></div>
          <div className="size">{cartSize}</div>
        </Link>
      </nav>
    </header>
  )
}