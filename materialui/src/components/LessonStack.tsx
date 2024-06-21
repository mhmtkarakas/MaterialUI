import React from "react";
import { Stack, Divider } from "@mui/material";

const LessonStack = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems={"center"}
      spacing={{xs:1, sm:2, md:4}}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>Item1</div>
      <div>Item2</div>
      <div>Item3</div>
    </Stack>
  );
};

export default LessonStack;
