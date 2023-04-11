import React, { useState } from "react";
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

  const [currentQuantity, setCurrentQuantity] = useState(1);
  const positiveWholeNumbers = new RegExp(/^0*[1-9]\d*$/);
  function increment() {
    if (!positiveWholeNumbers.test(currentQuantity)) setCurrentQuantity(1)
    else setCurrentQuantity(currentQuantity + 1)
  }
  function decrement() {
    if (!positiveWholeNumbers.test(currentQuantity)) setCurrentQuantity(1)
    else setCurrentQuantity(currentQuantity === 1 ? 1 : currentQuantity - 1);
  }
  function handleInputChange(e) {
    const input = Number(e.target.value)
    if (!isNaN(input)) setCurrentQuantity(Number(e.target.value))
  }

  return(
  <Link to={"/items/" + id} className="item-container" key={id} draggable={false}>
    <img src={require(`../../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}></img>
    <div className="item-info">
      <p className="name">{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
      <p>{moisture < 10 ? "Dried ✅" : moisture + "% moisture content"}</p>
      <div className="price">{"$" + price}</div>
      <div className="button-container">
        <div className="quantity-container" onClick={e => e.preventDefault()}>
          <button onClick={decrement}>−</button>
          <input min={1} value={currentQuantity} onChange={handleInputChange}/>
          <button onClick={increment}>+</button>
        </div>
        <button
          className="add-in-catalog"
          onClick={
            (e) => {
              e.preventDefault(); // Don't open item's page
              if (addToCart(itemInfo, currentQuantity) === "success") setCurrentQuantity(1);
            }
          }
        >Add to cart
        </button>
      </div>
    </div>
  </Link>
  )
}