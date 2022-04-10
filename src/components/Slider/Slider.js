import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  // while (scaledValue >= 1024 && unitIndex < units.length - 1) {
  //   unitIndex += 1;
  //   scaledValue /= 1024;
  // }

  // return `${scaledValue} ${units[unitIndex]}`;
  return `${scaledValue / 10000} 万円`;
}
function valueMonthFormat(value) {
  return `${value} ヶ月
  `;
}

function calculateValue(value) {
  return value;
}

export default function RangeSlider(props) {
  const [value, setValue] = React.useState([110000, 200000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onChangeFilter(event.target.value);
  };
  const [value2, setValue2] = React.useState([2, 6]);

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
    props.onChangeFilter2(event.target.value);
  };

  const style = {
    color: 'white'
  }

  return (
    <Box sx={{ width: 400 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Tuition: {value[0]} 〜 {value[1]}
      </Typography>
      <p style={style}>Course fee</p>
      <Slider
        value={value}
        min={5}
        max={1000000}
        step={10000}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaLabel={() => 'Course fee'}
      />
      <p style={style}>Course duration</p>
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
