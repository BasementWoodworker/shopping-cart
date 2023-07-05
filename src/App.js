import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import ItemPage from "./Components/Pages/Shop/ItemPage/ItemPage";
import allItems from "./ItemData/ItemData.json";

function addTestJunk(array) {
  for (let i = 0; i < 500; i++) {
    const id = i + 1000;
    array.push({
      "wood": "test",
      "price": "",
      "shape": "test",
      "length": "1",
      "width": "1",
      "thickness": "10",
      "moisture": "1",
      "id": id.toString()
    })
  }
}
addTestJunk(allItems);

function useStateLocalStorage(initialValue, keyName) {
  let storedValue = localStorage.getItem(keyName);
  if (!storedValue) {
    storedValue = JSON.stringify(initialValue);
    localStorage.setItem(keyName, storedValue);
  }
  storedValue = JSON.parse(storedValue);
  const [value, setValue] = useState(storedValue);
  function setter(value) {
    setValue(value);
    localStorage.setItem(keyName, JSON.stringify(value));
  }
  return [value, setter];
}

export default function App({ page }) {
  const ITEMS_PER_PAGE = 12;
  const [cart, setCart] = useStateLocalStorage([], "shopping-cart");
  const [hideCart, setHideCart] = useState(true);
  const [displayedItems, setDisplayedItems] = useState(allItems);
  const [searchbarFilter, setSearchbarFilter] = useState(() => (data) => data);
  const [sidebarFilter, setSidebarFilter] = useState(() => (data) => data);
  const [remountSidebar, setRemountSidebar] = useState(false);
  const positiveWholeNumbers = new RegExp(/^0*[1-9]\d*$/);

  function addToCart(newItem, quantity = 1) {
    if (!positiveWholeNumbers.test(quantity)) return "cancel";
    const itemInCart = cart.find(elem => elem.id === newItem.id);
    if (itemInCart === undefined) {
      const copy = {...newItem};
      copy.quantity = quantity;
      setCart([copy].concat(cart));
    } else {
      const copy = {...itemInCart};
      copy.quantity += quantity;
      setCart(cart.map(elem => elem.id !== copy.id ? elem : copy));
    }
    return "success"
  }

  function modifyDisplayedItems() {
    let result = allItems;
    result = searchbarFilter(result);
    result = sidebarFilter(result)
    setDisplayedItems(result);
  }

  useEffect(modifyDisplayedItems, [
    searchbarFilter,
    sidebarFilter
  ])

  useEffect(function toggleScrolling() {
    if (hideCart) document.body.style.overflow = "visible"
    else document.body.style.overflow = "hidden"
  }, [hideCart])

  // Remount sidebar to clear its filters on new search
  useEffect(() => setRemountSidebar(!remountSidebar), [ searchbarFilter ])

  const currentPage = 
    page === "home" ? <Home/> :
    page === "shop" ? <Shop key={remountSidebar} addToCart={addToCart} displayedItems={displayedItems} setSidebarFilter={setSidebarFilter} ITEMS_PER_PAGE={ITEMS_PER_PAGE}/> :
    page === "item-page" ? <ItemPage allItems={allItems} addToCart={addToCart}/> :
    null;
  
  return(
    <>
      {hideCart || <Cart cart={cart} setCart={setCart} setHideCart={setHideCart}/>}
      <Header allItems={allItems} cart={cart} setHideCart={setHideCart} setSearchbarFilter={setSearchbarFilter}/>
      {currentPage}
      <Footer/>
    </>
  )
}