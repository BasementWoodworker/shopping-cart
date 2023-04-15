import React from "react";
import ItemInCart from "./ItemInCart";

export default function Cart({ cart, setCart, setHideCart }) {
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

  return(
    <div className="cart-container modal" onClick={() => setHideCart(true)}>
      <div className="cart" onClick={(event) => event.stopPropagation()}>
        <div className="top-part">
          <h2 className="description">Your cart</h2>
          <div className="cart-close" onClick={() => setHideCart(true)}></div>
        </div>
        <div className="middle-part">
          {cart.map((item) => <ItemInCart itemInfo={item} cart={cart} setCart={setCart}/>)}
        </div>
        {cart.length !== 0 ? checkout : emptyMsg}
      </div>
    </div>
  )
}
