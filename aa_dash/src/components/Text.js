import React from "react";
import { Typography } from "@mui/material";

export default function Text({ fontSize, bold, fontColor, style, children }) {
  const size = fontSize ? fontSize : style?.fontSize ? style?.fontSize : 12;
  const weight = bold ? "bold" : style?.fontWeight ? style?.fontWeight : "400";
  const color = fontColor ? fontColor : style?.color ? style?.color : "#0F64A4";

  return (
    <Typography
      style={{
        fontSize: size,
        fontWeight: weight,
        color: color,
      }}
    >
      {children}
    </Typography>
  );
}
