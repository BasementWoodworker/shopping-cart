import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return(
    <main className="home-page">
      <div className="hero-section">
        <h1>Welcome to the store!</h1>
        <p className="greeting-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link className="shop-button" to="/shop">SHOP LUMBER ➜</Link>
      </div>
    </main>
  )
}