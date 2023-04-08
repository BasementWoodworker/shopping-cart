import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import ShopPage from "./Routes/ShopPage";

export default function RouteSwitch() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
      </Routes>
    </BrowserRouter>
  )
}