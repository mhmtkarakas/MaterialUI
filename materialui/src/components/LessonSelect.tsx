import React, {useState} from 'react'
import {Box,TextField,MenuItem} from "@mui/material"

const LessonSelect = () => {
    const [value, setValue] = useState<string[]>([])
   console.log(value)
  return (
    <Box width="250px">
      {/* <TextField
        label="Ulke Seciniz"
        select
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value="TR">Turkiye</MenuItem>
        <MenuItem value="USA">Amerika</MenuItem>
        <MenuItem value="GER">Almanya</MenuItem>
      </TextField> */}
      <TextField
      SelectProps={{
        multiple:true
      }}
        label="Ulke Seciniz"
        select
        fullWidth
        value={value}
        onChange={(e) => setValue(typeof e.target.value === "string" ? e.target.value.split(',') : e.target.value)}
      >
        <MenuItem value="TR">Turkiye</MenuItem>
        <MenuItem value="USA">Amerika</MenuItem>
        <MenuItem value="GER">Almanya</MenuItem>
      </TextField>
    </Box>
  );
}

export default LessonSelect