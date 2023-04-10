import React from "react";
import { Link } from "react-router-dom";

export default function Header({ setHideCart, cart }) {
  const cartSize = cart.reduce((summ, item) => summ += item.quantity, 0);
  return(
    <header>
      <a href="/" id="shop-name">Lumber</a>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link className="cart-link" onClick={() => setHideCart(false)} >{cartSize}</Link>
      </nav>
    </header>
  )
}