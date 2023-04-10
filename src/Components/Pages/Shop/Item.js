import React from "react";
import { Link } from "react-router-dom";

export default function Item({ itemInfo, addToCart }) {
  const {
    wood,
    price,
    shape,
    length,
    width,
    thickness,
    moisture,
    id
  } = itemInfo;

  return(
  <Link to={"/items/" + id} className="item-container" key={id}>
    <img src={require(`../../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}></img>
    <p>{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
    <p>{moisture + "% moisture"}</p>
    <div>
      <span>{"$" + price}</span>
      <button
        className="add-in-catalog"
        onClick={
          (e) => {
            e.preventDefault(); // Don't open item's page
            addToCart(itemInfo);
          }
        }
      >Add to cart</button>
    </div>
  </Link>
  )
}