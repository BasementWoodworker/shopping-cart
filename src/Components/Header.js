import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return(
    <header>
      <a href="/" id="shop-name">Lumber</a>
      <NavBar/>
    </header>
  )
}

function NavBar() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart" className="cart-link" ></Link>
    </nav>
  )
}