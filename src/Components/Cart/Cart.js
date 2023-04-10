import React from "react";
import ItemInCart from "./ItemInCart";

export default function Cart({ cart, setCart, setHideCart }) {
  const total = cart.reduce((summ, item) => summ += item.price * item.quantity, 0);
  console.log("Rendering")

  return(
    <div className="cart-container modal" onClick={() => setHideCart(true)}>
      <div className="cart" onClick={(event) => event.stopPropagation()}>
        <div className="cart-close" onClick={() => setHideCart(true)}></div>
        {cart.map((item) => <ItemInCart itemInfo={item} cart={cart} setCart={setCart}/>)}
        <div>Total: {total}$</div>
        <button disabled={total === 0}>Checkout</button>
      </div>
    </div>
  )
}
