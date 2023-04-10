import React, { useState, useEffect } from "react";
import woodDescriptions from "../../../ItemData/woodDescriptions.json";
import allItems from "../../../ItemData/ItemData.json";
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

export default function FilterBar({ setDisplayedItems }) {
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

  const separator = <div className="separator-line"></div>
  const woodCheckboxes = Object.keys(woodDescriptions).map((wood) => {
    return(
      <label>{wood}
        <input type="checkbox" name={wood} onClick={updateWoodFilter}></input>
      </label>
    )
  })
  const shapeCheckboxes = lumberShapes.map((shape) => {
    return (
      <label>{shape}
        <input type="checkbox" name={shape} onClick={updateShapeFilter}></input>
      </label>
    )
  })
  const moistureCheckbox = (
      <label>Dried
        <input type="checkbox" onClick={() => setFilterDry(!filterDry)}></input>
      </label>
  )

  function updateWoodFilter(event) {
    const input = event.target;
    let updatedWood = [...woodFilter];
    if (input.checked) updatedWood.push(input.name)
    else updatedWood = updatedWood.filter(elem => elem !== input.name);
    setWoodFilter(updatedWood);
  }
  function updateShapeFilter(event) {
    const input = event.target;
    let updatedShape = [...shapeFilter];
    if (input.checked) updatedShape.push(input.name)
    else updatedShape = updatedShape.filter(elem => elem !== input.name);
    setShapeFilter(updatedShape);
  }

  function filterItems() {
    setDisplayedItems(allItems.filter((item) => {
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
    }))
  }

  useEffect(filterItems, [
    woodFilter,
    shapeFilter,
    minPrice,
    maxPrice,
    minLength,
    maxLength,
    minWidth,
    maxWidth,
    minThickness,
    maxThickness,
    filterDry
  ]);

  return(
    <nav className="filter-bar">
      <div className="filter-settings">
        <h2 className="filter-type">Wood</h2>
        {woodCheckboxes}
        {separator}
        <MySlider criteria="price" step={25} upperLimit={MAX_PRICE} min={minPrice} setMin={setMinPrice} max={maxPrice} setMax={setMaxPrice} />
        {separator}
        <h2 className="filter-type">Shape</h2>
        {shapeCheckboxes}
        {separator}
        {moistureCheckbox}
        {separator}
        <h2 className="filter-type">Size</h2>
        <MySlider criteria="length" step={250} upperLimit={MAX_LENGTH} min={minLength} setMin={setMinLength} max={maxLength} setMax={setMaxLength} />
        <MySlider criteria="width" step={50} upperLimit={MAX_WIDTH} min={minWidth} setMin={setMinWidth} max={maxWidth} setMax={setMaxWidth} />
        <MySlider criteria="thickness" step={5} lowerLimit={10} upperLimit={MAX_THICKNESS} min={minThickness} setMin={setMinThickness} max={maxThickness} setMax={setMaxThickness} />
      </div>
    </nav>
  )
}