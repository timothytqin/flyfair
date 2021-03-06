import React from "react";
import { Button } from "@mui/material";

import logo from "../assets/logo.png";
import Text from "./Text";

export default function Header({ show, setShow }) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    name: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#FFF",
    },
    title: {
      display: "flex",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <Text style={styles.name}>FlyFair</Text>
        <img src={logo} height={100} />
      </div>
      <Button
        variant="contained"
        backgroundColor={"#0F64A4"}
        onClick={() => {
          setShow(!show);
        }}
      >
        <Text fontSize={23} fontColor="#FFF">
          {show ? "Show Flight Details" : "+ Add Flight"}
        </Text>
      </Button>
    </div>
  );
}
