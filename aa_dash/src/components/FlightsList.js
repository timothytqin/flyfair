import React from "react";
import FlightItem from "./FlightItem";
import HorizontalBar from "./HorizontalBar";
import Panel from "./Panel";
import Text from "./Text";

export default function FlightList({ data, bids }) {
  const styles = {
    container: {
      marginRight: "1em",
      flex: 2,
    },
    header: {
      display: "flex",
      alignItems: "flex-end",
    },
    body: {
      height: "69vh",
      overflowY: "scroll",
    },
  };

  const flights = [...data];

  return (
    <Panel style={styles.container}>
      <div style={styles.header}>
        <Text fontSize={21}>Ongoing Bids</Text>
        <Text fontSize={11}> | Completed Bids</Text>
      </div>
      <HorizontalBar />
      <div style={styles.body}>
        {flights.map((flight) => (
          <FlightItem data={flight} bids={bids} />
        ))}
      </div>
    </Panel>
  );
}
