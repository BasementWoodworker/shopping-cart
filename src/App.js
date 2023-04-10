import React, { useState } from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Shop from "./Components/Pages/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import ItemPage from "./Components/Pages/Shop/ItemPage/ItemPage";

export default function App({ page }) {
  const [cart, setCart] = useState([]);
  const [hideCart, setHideCart] = useState(true);
  function addToCart(newItem) {
    const itemInCart = cart.find(elem => elem.id === newItem.id);
    if (itemInCart === undefined) {
      const temp = newItem;
      temp.quantity = 1;
      setCart(cart.concat(temp));
    } else {
      itemInCart.quantity += 1;
    }
  }

  const currentPage = 
    page === "home" ? <Home/> :
    page === "shop" ? <Shop addToCart={addToCart}/> :
    page === "item-page" ? <ItemPage addToCart={addToCart}/> :
    null;
  
  return(
    <>
      {hideCart || <Cart cart={cart} setCart={setCart} setHideCart={setHideCart}/>}
      <Header cart={cart} setHideCart={setHideCart}/>
      {currentPage}
      <Footer/>
    </>
  )
}