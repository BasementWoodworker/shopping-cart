import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import Preview from "./Preview";

export default function SearchBar({ allItems, setSearchbarFilter }) {
  const [input, setInput] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [previewItems, setPreviewItems] = useState([]);
  const catalog = document.querySelector("main.shop > .item-display > .items");
  const navigate = useNavigate();

  function searchbarFilter(items, search = currentSearch) {
    if (search === "") return items;
    const keyWords = search.split(/[ $xXхХ]/);
    
    return items.filter(item => {
      let match = true;
      keyWords.forEach(keyWord => {
        let hasThisKeyword = false;
        for (const [key, value] of Object.entries(item)) {
          if (value.toLowerCase().includes(keyWord.toLowerCase()) && key !== "id" && key !== "moisture") hasThisKeyword = true;
        }
        if (!hasThisKeyword) match = false;
      })
      return match;
    })
  }

  function clearInput () {
    setInput("");
  }

  function submitSearch(event) {
    event.preventDefault();
    setCurrentSearch(input);
    setInput("");
    navigate("/shop");
  }

  useEffect(() => setSearchbarFilter(() => searchbarFilter), [currentSearch]);

  function updatePreviewItems() {
    if (input === "") setPreviewItems([])
    else setPreviewItems(searchbarFilter(allItems, input).slice(0, 7))
  }
  
  function closePreview(e) {
    const focusTarget = e.relatedTarget;
    if (focusTarget)
      if (focusTarget.className === "item-container-preview") {
        // Manually clicking preview link before it disappears from the DOM
        focusTarget.click();
        clearInput();
      }

    setPreviewItems([]);
  }

  useEffect(updatePreviewItems, [input])

  function reset() {
    const form = document.querySelector("form.searchbar-container");
    setCurrentSearch("");
  }

  return (
    <form className="searchbar-container" onSubmit={submitSearch}>
      <input className="searchbar" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={closePreview}
        onFocus={updatePreviewItems}
      ></input>
      {input === "" ?
        null :
        <>
          <button type="button" className="clear" onClick={clearInput}>×</button>
          <div className="separator">|</div>
        </>
      }
      <button type="submit"></button>
      <Preview previewItems={previewItems}/>
      {(currentSearch && catalog) ?
        createPortal(
          <div className="current-search">
            <span>{currentSearch}</span>
            <button onClick={reset}>×</button>
          </div>, 
          catalog
        ) :
        null
      }
    </form>
  )
}