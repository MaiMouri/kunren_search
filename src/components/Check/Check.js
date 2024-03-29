import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FcCheckmark } from "react-icons/fc";
import './Check.css'

export default function Check(props) {
  const [checked, setChecked] = React.useState([true, true, true, true, true, true]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
    props.onChangeChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3], checked[4], checked[5]]);
    props.onChangeChecked([event.target.checked, checked[1], checked[2], checked[3], checked[4], checked[5]]);
  };

  const handleChange3 = (event) => {
    const values = [checked[0], event.target.checked, checked[2], checked[3], checked[4], checked[5]]
    setChecked(values);
    props.onChangeChecked(values);
  };

  const handleChange4 = (event) => {
    const values = [checked[0], checked[1], event.target.checked, checked[3], checked[4], checked[5]];
    setChecked(values);
    props.onChangeChecked(values);
  };

  const handleChange5 = (event) => {
    const values = [checked[0], checked[1], checked[2], event.target.checked, checked[4], checked[5]];
    setChecked(values);
    props.onChangeChecked(values);
  };

  const handleChange6 = (event) => {
    const values = [checked[0], checked[1], checked[2], checked[3], event.target.checked, checked[5]];
    setChecked(values);
    props.onChangeChecked(values);
  };

  const handleChange7 = (event) => {
    const values = [checked[0], checked[1], checked[2], checked[3], checked[4], event.target.checked];
    setChecked(values);
    props.onChangeChecked(values);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 4 }}>
      <FormControlLabel
        label="10万円以下"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="11〜30万円"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="31〜50万円"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
      <FormControlLabel
        label="51〜80万円"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
      />
      <FormControlLabel
        label="81〜100万円"
        control={<Checkbox checked={checked[4]} onChange={handleChange6} />}
      />
      <FormControlLabel
        label="100万円以上"
        control={<Checkbox checked={checked[5]} onChange={handleChange7} />}
      />
    </Box>
  );

  return (
    <div className='check-container'>
      <h3 className='filter-title'><FcCheckmark /> 講座受講料:</h3>
      <FormControlLabel
        label="すべて"
        control={
          <Checkbox
            checked={checked[0] && checked[1] && checked[2] && checked[3] && checked[4] && checked[5]}
            indeterminate={checked.includes(true) && checked.includes(false)}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
