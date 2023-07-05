import React from "react";
import { Link } from "react-router-dom";

export default function ItemInCart({ itemInfo, cart, setCart, setHideCart }) {
  const {
    wood,
    price,
    shape,
    length,
    width,
    thickness,
    quantity,
    id
  } = itemInfo;

  function increment() {
    const itemInCart = cart.find(elem => elem.id === id);
    const itemCopy = {...itemInCart};
    itemCopy.quantity++;
    const itemIndex = cart.indexOf(itemInCart);
    setCart(cart.slice(0, itemIndex).concat(itemCopy).concat(cart.slice(itemIndex + 1)));
  }
  function decrement() {
    const itemInCart = cart.find(elem => elem.id === id);
    if (itemInCart.quantity <= 1) return;
    const itemCopy = {...itemInCart};
    itemCopy.quantity--;
    const itemIndex = cart.indexOf(itemInCart);
    setCart(cart.slice(0, itemIndex).concat(itemCopy).concat(cart.slice(itemIndex + 1)));
  }
  function handleInputChange(e) {
    const input = Number(e.target.value)
    if (isNaN(input)) {
      e.preventDefault();
      return;
    }
    const itemInCart = cart.find(elem => elem.id === id);
    const itemCopy = {...itemInCart};
    itemCopy.quantity = input;
    const itemIndex = cart.indexOf(itemInCart);
    setCart(cart.slice(0, itemIndex).concat(itemCopy).concat(cart.slice(itemIndex + 1)));
  }
  function removeZeroQuantityItems(e) {
    const input = Number(e.target.value)
    if (input != 0) return;
    const itemInCart = cart.find(elem => elem.id === id);
    const itemIndex = cart.indexOf(itemInCart);
    setCart(cart.slice(0, itemIndex).concat(cart.slice(itemIndex + 1)));
  }

  function remove(e) {
    e.preventDefault();
    setCart(cart.filter(elem => elem.id !== id));
  }

  return(
  <Link className="item-container-cart" to={"/items/" + itemInfo.id} onClick={() => setHideCart(true)}>
    <img src={require(`../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}></img>
    <div className="right-part">
      <p className="name">{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
      <div className="slide-under-in-mobile" onClick={e => e.stopPropagation()}>
        <span className="price">{"$" + price * quantity}</span>
        <div className="quantity-container" onClick={e => e.preventDefault()}>
          <button onClick={decrement}>−</button>
          <input min={1} value={quantity} onChange={handleInputChange} onBlur={removeZeroQuantityItems}/>
          <button onClick={increment}>+</button>
        </div>
        <button className="remove" onClick={remove}>Remove</button>
      </div>
    </div>
  </Link>
  )
}