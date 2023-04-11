import React from "react";
import { useParams } from "react-router-dom";
import itemData from "../../../../ItemData/ItemData.json";
import woodDescriptions from "../../../../ItemData/woodDescriptions.json";

export default function ItemPage({ addToCart }) {
  const { itemId } = useParams();
  const itemInfo = itemData.find(item => item.id === itemId)
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

  return(
    <main className="item-page">
      <img className="image" src={require(`../../../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}/>
      <div className="info">
        <h2 className="name">{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</h2>
        <div className="price">{"$" + price}</div>
        <table>
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
        </table>
        <button onClick={() => addToCart(itemInfo)}>ADD TO CART</button>
        <p>{description}</p>
      </div>
    </main>
  );
}