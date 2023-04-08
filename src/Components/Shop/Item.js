import React, { useState } from "react";

export default function Item(props) {
  const {
    wood,
    price,
    shape,
    length,
    width,
    thickness,
    moisture,
    description
  } = props.itemInfo
  return(
  <div className="item-container">
    <img src={require(`../../Assets/images/${wood.toLowerCase()}-${shape}.jpg`)}></img>
    <p>{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
    <p>{moisture + "% moisture"}</p>
    <div>
      <span>{price + "$"}</span>
      <button>Add to cart</button>
    </div>
  </div>
  )
}