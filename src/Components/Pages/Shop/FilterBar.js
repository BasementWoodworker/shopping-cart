import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import woodDescriptions from "../../../ItemData/woodDescriptions.json";
import MySlider from "./MySlider";

const MAX_PRICE = 500;
const MAX_LENGTH = 6000;
const MAX_WIDTH = 2000;
const MAX_THICKNESS = 200;
const lumberShapes = [
  "plank",
  "beam",
  "slab"
]

export default function FilterBar({ setSidebarFilter }) {
  const [woodFilter, setWoodFilter] = useState([]);
  const [shapeFilter, setShapeFilter] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [minLength, setMinLength] = useState(0);
  const [maxLength, setMaxLength] = useState(MAX_LENGTH);
  const [minWidth, setMinWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(MAX_WIDTH);
  const [minThickness, setMinThickness] = useState(10);
  const [maxThickness, setMaxThickness] = useState(MAX_THICKNESS);
  const [filterDry, setFilterDry] = useState(false);
  const navigate = useNavigate();

  const separator = <div className="separator-line"></div>
  const woodCheckboxes = Object.keys(woodDescriptions).map((wood, i) => {
    return(
      <label key={i}>{wood}
        <input type="checkbox" name={wood} onClick={updateWoodFilter}></input>
      </label>
    )
  })
  const shapeCheckboxes = lumberShapes.map((shape, i) => {
    return (
      <label key={i}>{shape}
        <input type="checkbox" name={shape} onClick={updateShapeFilter}></input>
      </label>
    )
  })
  const moistureCheckbox = (
      <label>Dried
        <input type="checkbox" onClick={(event) => {
          setFilterDry(!filterDry);
          moveApplyButtonTo(event);
        }}></input>
      </label>
  )

  function updateWoodFilter(event) {
    const input = event.target;
    let updatedWood = [...woodFilter];
    if (input.checked) updatedWood.push(input.name)
    else updatedWood = updatedWood.filter(elem => elem !== input.name);
    setWoodFilter(updatedWood);
    moveApplyButtonTo(event);
  }
  function updateShapeFilter(event) {
    const input = event.target;
    let updatedShape = [...shapeFilter];
    if (input.checked) updatedShape.push(input.name)
    else updatedShape = updatedShape.filter(elem => elem !== input.name);
    setShapeFilter(updatedShape);
    moveApplyButtonTo(event);
  }

  function filterItems(items) {
    return items.filter((item) => {
      let show = true;

      if (!(item.price >= minPrice && item.price <= maxPrice)) show = false;
      if (!(item.length >= minLength && item.length <= maxLength)) show = false;
      if (!(item.width >= minWidth && item.width <= maxWidth)) show = false;
      if (!(item.thickness >= minThickness && item.thickness <= maxThickness)) show = false;
      if (woodFilter.length !== 0) {
        if (!woodFilter.includes(item.wood)) show = false;
      }
      if (shapeFilter.length !==0) {
        if (!shapeFilter.includes(item.shape)) show = false;
      }
      if (filterDry && Number (item.moisture) > 8) show = false; 
      
      return show;
    })
  }

  function hideApplyButton() {
    const applyButton = document.querySelector("button.apply-filters");
    applyButton.style.top = "-200px";
  }

  function applyFilters() {
    setSidebarFilter(() => filterItems);
    hideApplyButton();
    window.scrollTo(0, 0);
    navigate("/shop/1");
  }

  function moveApplyButtonTo(e) {
    const input = e.target;
    const applyButton = document.querySelector("button.apply-filters");
    const inputOffset = input.offsetTop;
    const parentOffset = input.type === "checkbox" ? 0 : input.offsetParent.offsetTop;
    applyButton.style.top = inputOffset + parentOffset - 7 + "px";
  }

  // Clear filters and hide apply button on mount
  useEffect(applyFilters, []);

  return(
    <nav className="filter-bar">
      <div className="filter-settings">
        <button className="apply-filters" onClick={applyFilters}>Apply</button>
        <h2 className="filter-type">Wood</h2>
        {woodCheckboxes}
        {separator}
        <MySlider criteria="price" step={25} upperLimit={MAX_PRICE} min={minPrice} setMin={setMinPrice} max={maxPrice} setMax={setMaxPrice} moveApplyButtonTo={moveApplyButtonTo} />
        {separator}
        <h2 className="filter-type">Shape</h2>
        {shapeCheckboxes}
        {separator}
        {moistureCheckbox}
        {separator}
        <h2 className="filter-type">Size</h2>
        <MySlider criteria="length" step={250} upperLimit={MAX_LENGTH} min={minLength} setMin={setMinLength} max={maxLength} setMax={setMaxLength} moveApplyButtonTo={moveApplyButtonTo} />
        <MySlider criteria="width" step={50} upperLimit={MAX_WIDTH} min={minWidth} setMin={setMinWidth} max={maxWidth} setMax={setMaxWidth} moveApplyButtonTo={moveApplyButtonTo} />
        <MySlider criteria="thickness" step={5} lowerLimit={10} upperLimit={MAX_THICKNESS} min={minThickness} setMin={setMinThickness} max={maxThickness} setMax={setMaxThickness} moveApplyButtonTo={moveApplyButtonTo} />
      </div>
    </nav>
  )
}