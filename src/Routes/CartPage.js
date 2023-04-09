import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer";
import Cart from "../Components/Cart/Cart";

export default function CartPage({ cart, setCart }) {
  return(
    <>
      <Header/>
      <Cart cart={cart} setCart={setCart}/>
      <Footer/>
    </>
  )
}