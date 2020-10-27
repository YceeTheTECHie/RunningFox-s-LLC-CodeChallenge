import RangeSlider from './RangeSlider';
import React, {
  memo,
  useCallback,
  useState,
  useMemo
} from "react";


const PriceScroll = () => {
const [parentVal, setParentVal] = useState(180);

      const sliderValueChanged = useCallback(val => {
        console.log("NEW VALUE", val);
        setParentVal(val);
      });

      const sliderProps = useMemo(
        () => ({
          min: 20,
          max: 300,
          value: parentVal,
          step: 2,
          onChange: e => sliderValueChanged(e)
        }),
        
      );

      return (
          <div>
              
          {/* <h1>PARENT VALUE: {parentVal}</h1> */}
          <RangeSlider {...sliderProps} classes="additional-css-classes" />
        </div>
      );
    };

export default memo(PriceScroll);
