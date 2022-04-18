import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { FcCheckmark } from "react-icons/fc";

function valuetext(value) {
  return `${value}°C`;
}

function valueMonthFormat(value) {
  return `${value} ヶ月
  `;
}

export default function RangeSlider(props) {
  const [value2, setValue2] = React.useState([2, 6]);

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
    props.onChangeFilter2(event.target.value);
  };

  return (
    <Box sx={{ width: 400, padding: 1 }}>
      <h3 className='filter-title'><FcCheckmark /> 訓練期間:</h3>
      <Typography id="non-linear-slider" variant="h5" gutterBottom>
        {value2[0]}ヶ月 〜 {value2[1]}ヶ月
      </Typography>

      {/* <p style={style}>Choose the duration</p> */}
      <Slider
        getAriaLabel={() => 'Course duration'}
        value={value2}
        min={1}
        max={12}
        step={1}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        valueLabelFormat={valueMonthFormat}
      />
    </Box>
  );
}

// export default RangeSlider;
