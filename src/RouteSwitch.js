import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import ShopPage from "./Routes/ShopPage";
import CartPage from "./Routes/CartPage";

export default function RouteSwitch() {
  const [cart, setCart] = useState([]);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  )
}