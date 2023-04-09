import React from "react";
import ItemInCart from "./ItemInCart";

export default function Cart({ cart, setCart }) {
  const total = cart.reduce((summ, item) => summ += item.price * item.quantity, 0);

  return(
    <main>
      {cart.map((item) => <ItemInCart itemInfo={item} cart={cart} setCart={setCart}/>)}
      <div>Total: {total}$</div>
      <button disabled={total === 0}>Checkout</button>
    </main>
  )
}
