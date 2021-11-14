import React from "react";
import FlightItem from "./FlightItem";
import HorizontalBar from "./HorizontalBar";
import Panel from "./Panel";
import Text from "./Text";

export default function FlightList() {
  const styles = {
    container: {
      marginRight: "1em",
      flex: 2,
    },
    header: {
      display: "flex",
      alignItems: "flex-end",
    },
  };

  const flights = [
    {
      from: "AUS",
      to: "JFK",
      type: "Airbus 320",
      price: "300",
      time: 4,
    },
  ];

  return (
    <Panel style={styles.container}>
      <div style={styles.header}>
        <Text fontSize={21}>Ongoing Bids</Text>
        <Text fontSize={11}> | Completed Bids</Text>
      </div>
      <HorizontalBar />
      {[...flights, ...flights, ...flights, ...flights].map((flight) => (
        <FlightItem data={flight} />
      ))}
    </Panel>
  );
}
