import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";

export default function RouteSwitch() {
  return(
    <HashRouter>
      <Routes>
        <Route path="" element={<App page="home"/>} />
        <Route path="/shop" element={<App page="shop"/>} />
        <Route path="/shop/:currentPage" element={<App page="shop"/>} />
        <Route path="/items/:itemId" element={<App page="item-page"/>} />
      </Routes>
    </HashRouter>
  )
}