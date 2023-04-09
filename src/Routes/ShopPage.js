import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
import Shop from "../Components/Shop/Shop";

export default function ShopPage({ cart, setCart }) {
  return(
    <>
      <Header/>
      <Shop cart={cart} setCart={setCart}/>
      <Footer/>
    </>
  )
}