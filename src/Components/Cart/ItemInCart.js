import React from "react";

export default function ItemInCart({ itemInfo, cart, setCart }) {
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

  function remove() {
    setCart(cart.filter(elem => elem.id !== id));
  }

  return(
  <div className="item-container-cart">
    <img src={require(`../../Assets/images/products/${wood.toLowerCase()}-${shape}.jpg`)}></img>
    <p className="name">{`${wood} ${shape} ${thickness} x ${width} x ${length}`}</p>
    <div className="right-part">
      <span className="price">{"$" + price * quantity}</span>
      <div className="quantity-container" onClick={e => e.preventDefault()}>
        <button onClick={decrement}>−</button>
        <input min={1} value={quantity} onChange={handleInputChange} onBlur={removeZeroQuantityItems}/>
        <button onClick={increment}>+</button>
      </div>
      <button className="remove" onClick={remove}>Remove</button>
    </div>
  </div>
  )
}