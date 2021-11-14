import React from "react";

export default function HorizontalBar({ height }) {
  return (
    <div
      style={{
        width: "100%",
        height: height ? height : 1,
        backgroundColor: "#0F64A4",
      }}
    />
  );
}
