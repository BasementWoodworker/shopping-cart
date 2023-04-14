import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import woodDescriptions from "../../../../ItemData/woodDescriptions.json";

export default function ItemPage({ allItems, addToCart }) {
  const { itemId } = useParams();
  const itemInfo = allItems.find(item => item.id === itemId)
  const {
    wood,
    price,
    shape,
    length,
    width,
    thickness,
    moisture,
  } = itemInfo
  const description = woodDescriptions[wood];

  useEffect(() => window.scrollTo(0, 0), []);

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
    <main className="item-page">
      <img className="image" src={require(`../../../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}/>
      <div className="info">
        <h2 className="name">{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</h2>
        <div className="price">{"$" + price}</div>
        <table>
          <tbody>
            <tr>
              <td>Thickness</td>
              <td>{thickness} mm</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>{width} mm</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{length} mm</td>
            </tr>
            <tr>
              <td>Moisture content</td>
              <td>{moisture}%</td>
            </tr>
          </tbody>
        </table>
        <div className="button-container">
        <div className="quantity-container" onClick={e => e.preventDefault()}>
          <button onClick={decrement}>−</button>
          <input min={1} value={currentQuantity} onChange={handleInputChange}/>
          <button onClick={increment}>+</button>
        </div>
        <button
          className="add-in-itempage"
          onClick={
            (e) => {
              e.preventDefault(); // Don't open item's page
              if (addToCart(itemInfo, currentQuantity) === "success") setCurrentQuantity(1);
            }
          }
        >Add to cart
        </button>
      </div>
        <p className="description">{description}</p>
      </div>
    </main>
  );
}