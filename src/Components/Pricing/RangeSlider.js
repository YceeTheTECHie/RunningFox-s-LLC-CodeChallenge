import React,{memo,useState,useEffect} from 'react'

const RangeSlider = memo(
  ({ classes, label, onChange, value, ...sliderProps }) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null);

    useEffect(() => {
      setSliderVal(value);
    }, [value]);

    const changeCallback = e => {
      setSliderVal(e.target.value);
    };

    useEffect(() => {
      if (mouseState === "up") {
        onChange(sliderVal);
      }
    }, [mouseState]);
    return (
      <div>
        <div className="fee">
          <span className="dollar">$</span>  <span className="price">{sliderVal}</span><span className="period">/  year</span>
        </div>
        <div>
        <input
          type="range"
          value={sliderVal}
          {...sliderProps}
          className={`slider ${classes}`}
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
          />
          
          <br/>
          <br/>
          <span className="lbound">$20</span>
          <span className="ubound">$300</span><br/>
          <br/>
          </div>
   
      
          
      </div>
    );
  }
);


export default RangeSlider;
