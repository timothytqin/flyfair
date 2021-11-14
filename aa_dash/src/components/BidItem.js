import React from "react";
import Text from "./Text";

export default function BidItem({ data }) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      borderRadius: "8px",
      backgroundColor: "#0F64A4",
      padding: "2em",
      marginTop: "1em",
    },
    index: {
      width: "50px",
      textAlign: "center",
    },
    text: {
      fontSize: 21,
      color: "#FFF",
    },
  };

  const { index, _id, amount, usertype } = data;
  return (
    <div style={styles.container}>
      <div style={styles.index}>
        <Text style={styles.text}>{`${index + 1}.`}</Text>
      </div>
      <div style={{ flex: 1 }}>
        <Text style={styles.text}>{`${
          usertype == "crew" ? "Crew" : "Pilot"
        } ${_id["$oid"].toUpperCase()}`}</Text>
      </div>
      <div>
        <Text style={{ ...styles.text, fontSize: 27 }}>{`$${parseFloat(
          amount
        ).toFixed(2)}`}</Text>
      </div>
    </div>
  );
}
