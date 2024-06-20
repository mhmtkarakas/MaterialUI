import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";

const LessonRadioGroup = () => {
  const [value, setValue] = useState("");
 console.log(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <FormControl>
      <FormLabel>Maas Beklentiniz</FormLabel>
      <RadioGroup
        row
        name="expected-salary"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          label="2000$"
          value="2000"
          color="secondary"
          control={<Radio />}
        />
        <FormControlLabel
          label="3000$"
          value="3000"
          color="secondary"
          control={<Radio />}
        />
        <FormControlLabel
          label="4000$"
          value="4000"
          color="secondary"
          control={<Radio />}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default LessonRadioGroup;
