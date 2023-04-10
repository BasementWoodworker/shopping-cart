import React, { useState } from "react";

export default function Item({ itemInfo, cart, setCart }) {
  const {
    wood,
    price,
    shape,
    length,
    width,
    thickness,
    moisture,
    description,
    id
  } = itemInfo

  function addHandler() {
    const itemInCart = cart.find(elem => elem.id === itemInfo.id);
    if (itemInCart === undefined) {
      const newItem = itemInfo
      newItem.quantity = 1;
      setCart(cart.concat(newItem));
    } else {
      itemInCart.quantity += 1;
    }
  }

  return(
  <div className="item-container" key={id}>
    <img src={require(`../../../Assets/images/${wood.toLowerCase()}-${shape}.jpg`)}></img>
    <p>{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
    <p>{moisture + "% moisture"}</p>
    <div>
      <span>{price + "$"}</span>
      <button onClick={addHandler}>Add to cart</button>
    </div>
  </div>
  )
}