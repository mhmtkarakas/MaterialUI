import React from "react";
import { Typography } from "@mui/material";

const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Inventore delectus deleniti ipsam iste quasi, facilis provident
        perspiciatis dolores cupiditate? Voluptate pariatur explicabo, obcaecati
        aliquid est laudantium praesentium sed possimus quidem.
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Inventore delectus deleniti ipsam iste quasi, facilis provident
        perspiciatis dolores cupiditate? Voluptate pariatur explicabo, obcaecati
        aliquid est laudantium praesentium sed possimus quidem.
      </Typography>
      <Typography variant="h1">GORUNUM</Typography>
      <Typography variant="h2">GORUNUM</Typography>
      <Typography variant="h3">GORUNUM</Typography>
      <Typography variant="h4">GORUNUM</Typography>
      <Typography variant="h5">GORUNUM</Typography>

      <Typography variant="h1" component="h4">GORUNUM</Typography>
      <Typography variant="h1" component="h4" align="left">GORUNUM</Typography>
      <Typography variant="h1" component="h4" align="right">GORUNUM</Typography>

      <Typography variant="subtitle1">Altbaslik1</Typography>
      <Typography variant="subtitle2">Altbaslik2</Typography>

    </div>
  );
};

export default LessonTypography;
