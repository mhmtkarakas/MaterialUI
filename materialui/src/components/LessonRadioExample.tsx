import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";

const LessonRadioExample = () => {

  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "mehmetkarakas") {
        setHelperText("Dogru cevap tabi ki Mehmet Karakas");
        setError(false);
    } else if (value === "ofCourseMehmetKarakas") {
        setHelperText("Tebrikler Dogru Cevap");
        setError(false);
    } else {
      setHelperText("Lutfen Secim Yapiniz");
      setError(true);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Frontend Egitimine en cok kim calisir?</FormLabel>
        <RadioGroup onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel
            value="mehmetkarakas"
            label="Mehmet Karakas"
            control={<Radio />}
          />
          <FormControlLabel
            value="ofCourseMehmetKarakas"
            label="Tabi ki Mehmet Karakas"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gonder
        </Button>
      </FormControl>
    </form>
  );
};

export default LessonRadioExample;
