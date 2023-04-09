import React, { useEffect } from "react";
import ReactSlider from "react-slider";

export default function MySlider({ criteria, step, lowerLimit = 0, upperLimit, min, setMin, max, setMax }) {
  return(
    <div className="slider-container">
      <p className="filter-criteria">{criteria}</p>
      <input
        id={`min-${criteria}`}
        value={min === 0 ? "" : min}
        placeholder={min === 0 ? 0 : ""}
        onFocus={e => e.target.placeholder=""}
        onBlur={e => e.target.placeholder = min === 0 ? 0 : ""}
        type="number"
        step={step}
        min={lowerLimit}
        max={upperLimit}
        onChange={(e) => {setMin((Number(e.target.value)))}}/>
      <ReactSlider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={[min, max]}
        min={lowerLimit}
        max={upperLimit}
        step={step}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}></div>}
        pearling
        minDistance={step}
        onChange={(value) => {
          setMin(value[0]);
          setMax(value[1]);
        }}
      />
      <input id={`max-${criteria}`} value={max} type="number" step={step} min={1} max={upperLimit} onChange={(e) => setMax(Number(e.target.value))}/>
    </div>
  )
}