import React from "react";
import HorizontalBar from "./HorizontalBar";
import Text from "./Text";

export default function FlightItem({ data }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "5px",
    },
    left: {
      flex: 1,
      flexDirection: "column",
    },
    right: {
      flexDirection: "column",
    },
  };

  const { from, to, type, price, time } = data;

  return (
    <div style={styles.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={styles.left}>
          <Text fontSize={18} bold>{`${from} -> ${to}`}</Text>
          <Text fontSize={15}>{`${type}`}</Text>
        </div>
        <div style={styles.right}>
          <Text fontSize={15} bold>{`$${parseFloat(price).toFixed(2)}`}</Text>
          <Text fontSize={11}>{`${time} hours`}</Text>
        </div>
      </div>
      <HorizontalBar />
    </div>
  );
}
