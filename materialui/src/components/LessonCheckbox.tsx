import React, { ChangeEvent, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormLabel,
} from "@mui/material";

const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState<boolean>(false);
  const [knowledge, setKnowledge] = useState<string[]>([])
  console.log(knowledge);
   
   const handleCheckboxChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = event.target;
        if(checked){
            setKnowledge([...knowledge,value])
        }else{
            setKnowledge(knowledge.filter((item) => item !== value));

        }
     
   }
  
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
      <Box>
        {/* <FormControl>
          <FormLabel>Egitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="Lise" />
            <FormControlLabel control={<Checkbox />} label="Universite" />
            <FormControlLabel control={<Checkbox />} label="Ilkokul" />
          </FormGroup>
        </FormControl> */}
        <FormControl>
          <FormLabel>Frontend de Neleri Biliyorsun</FormLabel>
          <FormGroup>
            <FormControlLabel
             value="react"
              control={
                <Checkbox
                  checked={knowledge.includes("react")}
                  onChange={handleCheckboxChange}
                />
              }
              label="React"
            />
              <FormControlLabel
              value='angular'
              control={
                <Checkbox
                  checked={knowledge.includes("angular")}
                  onChange={handleCheckboxChange}
                />
              }
              label="Angular"
            />
              <FormControlLabel
              value="vuejs"
              control={
                <Checkbox
                  checked={knowledge.includes("vuejs")}
                  onChange={handleCheckboxChange}
                />
              }
              label="Vue Js"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LessonCheckbox;
