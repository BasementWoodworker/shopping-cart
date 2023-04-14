import React from "react";
import { Link } from "react-router-dom";

export default function ItemInPreview({ itemInfo }) {
  const {
    wood,
    price,
    shape,
    length,
    width,
    thickness,
    id,
  } = itemInfo;

  return(
    <Link className="item-container-preview" to={`/items/${id}`}>
      <img src={require(`../../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}></img>
      <p className="name">{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
      <span className="price">{"$" + price}</span>
    </Link>
  )
}