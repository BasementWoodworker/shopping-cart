import React, { useState } from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Shop from "./Components/Pages/Shop/Shop";
import Cart from "./Components/Cart/Cart";

export default function App({ page }) {
  const [cart, setCart] = useState([]);
  const [hideCart, setHideCart] = useState(true);

  const currentPage = 
    page === "home" ? <Home/> :
    page === "shop" ? <Shop cart={cart} setCart={setCart}/> :
    null;
    

  return(
    <>
      {hideCart || <Cart cart={cart} setCart={setCart} setHideCart={setHideCart}/>}
      <Header setHideCart={setHideCart}/>
      {currentPage}
      <Footer/>
    </>
  )
}