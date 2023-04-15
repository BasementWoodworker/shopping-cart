import React, { useEffect } from "react";
import ReactSlider from "react-slider";

export default function MySlider({ criteria, step, lowerLimit = 0, upperLimit, min, setMin, max, setMax, moveApplyButtonTo }) {
  useEffect(() => {
    const elem = document.getElementById(`min-${criteria}`);
    moveApplyButtonTo({ target: elem });
  }, [min])

  useEffect(() => {
    const elem = document.getElementById(`max-${criteria}`);
    moveApplyButtonTo({ target: elem });
  }, [max])

  return(
    <div className="slider-container">
      <div className={`filter-criteria ${criteria}`}>{criteria}</div>
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
        onChange={(e) => {
          setMin((Number(e.target.value)))
        }}
      />
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
      <input
        id={`max-${criteria}`}
        value={max}
        type="number"
        step={step}
        min={1}
        max={upperLimit}
        onChange={(e) => {
          setMax(Number(e.target.value));
        }}
        />
    </div>
  )
}