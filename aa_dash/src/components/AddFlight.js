import React from "react";
import { TextField, Button } from "@mui/material";

import HorizontalBar from "./HorizontalBar";
import Panel from "./Panel";
import Text from "./Text";

export default function AddFlight({ data }) {
  const styles = {
    container: {
      marginLeft: "1em",
      display: "flex",
      flexDirection: "column",
      flex: 3,
      padding: "2em 0 0 0",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      padding: "2em",
      paddingBottom: 0,
    },
    headerText: {
      fontSize: 21,
    },
    body: {
      display: "flex",
      flexDirection: "column",
      padding: "2em 4em",
    },
    textInput: {
      marginBottom: "2em",
    },
    footer: {
      display: "flex",
      flex: 1,
      alignItems: "flex-end",
    },
  };

  return (
    <Panel style={styles.container}>
      <div style={styles.header}>
        <Text style={styles.headerText}>Add Flight</Text>
        <HorizontalBar height={2} />
      </div>
      <div style={styles.body}>
        <TextField
          style={styles.textInput}
          id="standard-basic"
          label="Origin"
          variant="standard"
        />
        <TextField
          style={styles.textInput}
          id="standard-basic"
          label="Destination"
          variant="standard"
        />
        <TextField
          style={styles.textInput}
          id="standard-basic"
          label="Flight No."
          variant="standard"
        />
        <TextField
          style={styles.textInput}
          id="standard-basic"
          label="Aircraft Type"
          variant="standard"
        />
        <TextField
          style={styles.textInput}
          id="standard-basic"
          label="Pilots Needed"
          variant="standard"
        />
        <TextField id="standard-basic" label="Crew Needed" variant="standard" />
      </div>
      <div style={styles.footer}>
        <Button
          variant="contained"
          backgroundColor={"#0F64A4"}
          style={{ width: "100%", height: "60px", borderRadius: "0 0 8px 8px" }}
        >
          Add
        </Button>
      </div>
    </Panel>
  );
}
