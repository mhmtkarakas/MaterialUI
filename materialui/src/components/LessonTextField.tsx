import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const LessonTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={"4"}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Ad" />
        <TextField label="Ad" variant="outlined" />
        <TextField label="Ad" variant="filled" />
        <TextField label="Ad" variant="standard" />

        <TextField
          type="password"
          label="Ad"
          variant="filled"
          size="small"
          color="error"
          helperText="Lutfen isminizi giriniz"
        />
        <TextField
          disabled
          type="password"
          label="Ad"
          variant="filled"
          size="small"
          color="error"
          helperText="Lutfen isminizi giriniz"
        />
        <TextField
          InputProps={{ readOnly: true }}
          type="password"
          label="Ad"
          variant="filled"
          size="small"
          color="error"
          helperText="Lutfen isminizi giriniz"
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
          label="Toplam"
          variant="outlined"
          color="error"
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="start">TL</InputAdornment>,
          }}
          label="Toplam"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="password"
          label="Sifre"
          variant="outlined"
          color="error"
          helperText={
            !value
              ? "Lutfen bir sifre giriniz"
              : "Lutfen sifrenizi kimseyle paylasmayin"
          }
        />
      </Stack>
    </Stack>
  );
};

export default LessonTextField;
