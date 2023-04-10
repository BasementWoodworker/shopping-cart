import React from "react";
import { Link } from "react-router-dom";

export default function Header({ setHideCart }) {
  return(
    <header>
      <a href="/" id="shop-name">Lumber</a>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link className="cart-link" onClick={() => setHideCart(false)} ></Link>
      </nav>
    </header>
  )
}