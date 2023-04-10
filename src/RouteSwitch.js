import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

export default function RouteSwitch() {
  const [cart, setCart] = useState([]);

  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App page="home"/>} />
        <Route path="/shop" element={<App page="shop"/>} />
      </Routes>
    </BrowserRouter>
  )
}