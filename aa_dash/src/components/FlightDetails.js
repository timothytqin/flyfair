import React from "react";
import BidItem from "./BidItem";
import HorizontalBar from "./HorizontalBar";
import Panel from "./Panel";
import Text from "./Text";

export default function FlightDetails({ data, bids }) {
  const styles = {
    container: {
      marginLeft: "1em",
      flex: 3,
    },
    header: {
      display: "flex",
      alignItems: "flex-end",
    },
    headerText: {
      fontSize: 21,
    },
    body: {
      display: "flex",
      flexDirection: "column",
      padding: "2em 4em",
      height: "64vh",
      overflowY: "scroll",
    },
    direction: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
    },
    directionText: {
      fontSize: 34,
      fontWeight: "bold",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
    },
    label: {
      fontSize: 18,
    },
    value: {
      fontSize: 18,
      fontWeight: "bold",
    },
    section: {
      marginTop: "1em",
    },
  };

  const { departure, arrival, origin, destination, equipment } = data;
  return (
    <Panel style={styles.container}>
      <div style={styles.header}>
        <Text style={styles.headerText}>Bid Details</Text>
      </div>
      <HorizontalBar height={2} />
      <div style={styles.body}>
        <div style={styles.direction}>
          <div style={{ flex: 1, textAlign: "end" }}>
            <Text
              style={styles.directionText}
            >{`${origin.toUpperCase()}`}</Text>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <Text style={styles.directionText}>{`-->`}</Text>
          </div>
          <div style={{ flex: 1 }}>
            <Text
              style={styles.directionText}
            >{`${destination.toUpperCase()}`}</Text>
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.row}>
            <Text style={styles.label}>Depart At</Text>
            <Text style={styles.label}>Arrive At</Text>
          </div>
          <HorizontalBar />
          <div style={styles.row}>
            <Text style={styles.value}>{`${departure}`}</Text>
            <Text style={styles.value}>{`${arrival}`}</Text>
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.row}>
            <Text style={styles.label}>Aircraft Type</Text>
            <Text style={styles.label}>Flight No.</Text>
          </div>
          <HorizontalBar />
          <div style={styles.row}>
            <Text style={styles.value}>{`${equipment}`}</Text>
            <Text style={styles.value}>{`AA ${
              Math.round(Math.random() * 100000) + 1000
            }`}</Text>
          </div>
        </div>
        <div style={styles.section}>
          <div style={styles.row}>
            <Text style={styles.value}>Bid History</Text>
            <Text style={styles.label}>Pilot | Crew</Text>
          </div>
          {bids.map((bid, index) => (
            <BidItem data={{ ...bid, index }} />
          ))}
        </div>
      </div>
    </Panel>
  );
}
