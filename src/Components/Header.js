import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return(
    <header>
      <Link to="/" id="shop-name">Lumber</Link>
      <NavBar/>
    </header>
  )
}

function NavBar() {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  )
}