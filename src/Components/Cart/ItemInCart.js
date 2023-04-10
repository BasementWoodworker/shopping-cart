import React, { useState } from "react";

export default function ItemInCart({ itemInfo, cart, setCart }) {
  const {
    wood,
    price,
    shape,
    length,
    width,
    thickness,
    moisture,
    quantity,
    id
  } = itemInfo;

  function increment() {
    const itemInCart = cart.find(elem => elem.id === id);
    const itemIndex = cart.indexOf(itemInCart);
    const itemCopy = itemInCart;
    itemCopy.quantity++;
    setCart(cart.slice(0, itemIndex).concat(itemCopy).concat(cart.slice(itemIndex + 1)));
  }
  function decrement() {
    const itemInCart = cart.find(elem => elem.id === id);
    if (itemInCart.quantity === 1) return;
    const itemIndex = cart.indexOf(itemInCart);
    const itemCopy = itemInCart;
    itemCopy.quantity--;
    setCart(cart.slice(0, itemIndex).concat(itemCopy).concat(cart.slice(itemIndex + 1)));
  }
  function remove() {
    setCart(cart.filter(elem => elem.id !== id));
  }

  return(
  <div className="item-container-cart">
    <img src={require(`../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}></img>
    <p>{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
    <p>{moisture + "% moisture"}</p>
      <span>{price + "$"}</span>
      <div className="quantity-container">
        <button onClick={decrement}>-</button>
        <div>Quantity: {quantity}</div>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={remove}>Remove</button>
  </div>
  )
}