import React from "react";

export default function Panel({ style, children }) {
  const styles = {
    container: {
      backgroundColor: "#DADFE4",
      borderRadius: "8px",
      padding: "2em",
    },
  };

  return <div style={{ ...styles.container, ...style }}>{children}</div>;
}
