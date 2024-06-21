import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormLabel,
} from "@mui/material";

const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);
  console.log(isAccept);
  
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Egitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="Lise" />
            <FormControlLabel control={<Checkbox />} label="Universite" />
            <FormControlLabel control={<Checkbox />} label="Ilkokul" />
          </FormGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Egitim Durumu</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              label="Kullanim Kosullarini Kabul Ediyorum"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LessonCheckbox;
