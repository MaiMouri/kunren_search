import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
      left: 9
    },
  },
};

const options = [
  '通学（昼間）',
  '通学（夜間）',
  '通学（土日）',
  'eラーニング',
  '通信',
];

function getStyles(option, personOption, theme) {
  return {
    fontWeight:
      personOption.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  const theme = useTheme();
  const [personOption, setPersonOption] = React.useState(options);
  console.log(props);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonOption(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  const chipDelete = (option) => {
    setPersonOption(personOption.filter(value => value !== option))
    console.log('change');
    console.log(personOption.filter(value => value !== option));
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel id="multiple-chip-label">Attend</InputLabel>
        <Select
          labelId="multiple-chip-label"
          id="multiple-chip"
          multiple
          value={personOption}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={() => { chipDelete(value) }} onMouseDown={(event) => { event.stopPropagation() }} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(option, personOption, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
