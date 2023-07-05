import React, { useRef, useEffect } from "react";
import ItemInCart from "./ItemInCart";

export default function Cart({ cart, setCart, setHideCart }) {
  const cartDiv = useRef();
  const total = cart.reduce((summ, item) => summ += item.price * item.quantity, 0);
  const emptyMsg = (
    <div className="empty-message">
      <span className="msg">Empty</span>
      <span className="magnifying-glass"></span>
    </div>
  )
  const checkout = (
    <div className="checkout-container">
      <div className="total">Total: {total}$</div>
      <button className="checkout" disabled={total === 0}>Checkout</button>
    </div>
  )

  useEffect(() => {
    setTimeout(() => cartDiv.current.classList.add("start-moving"), 0)
  }, []);

  return(
    <div className="cart-container modal" onClick={() => setHideCart(true)}>
      <div className="cart" onClick={(event) => event.stopPropagation()} ref={cartDiv}>
        <div className="top-part">
          <h2 className="description">Your cart</h2>
          <div className="cart-close" onClick={() => setHideCart(true)}></div>
        </div>
        <div className="middle-part">
          {cart.map((item) => <ItemInCart itemInfo={item} cart={cart} setCart={setCart} key={item.id} setHideCart={setHideCart} />)}
        </div>
        {cart.length !== 0 ? checkout : emptyMsg}
      </div>
    </div>
  )
}
