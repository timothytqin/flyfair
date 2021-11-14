import React from "react";
import HorizontalBar from "./HorizontalBar";
import Text from "./Text";
import { getMinCrewBid, getMinPilotBid } from "../lib/lib";

export default function FlightItem({ data, bids }) {
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

  const { id, origin, destination, equipment, duration } = data;
  const minBidCrew = id == 0 ? getMinCrewBid(bids) : Math.random() * 500 + 100;
  const minBidPilot =
    id == 0 ? getMinPilotBid(bids) : Math.random() * 1000 + 100;

  return (
    <div style={styles.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={styles.left}>
          <Text
            fontSize={18}
            bold
          >{`${origin.toUpperCase()} -> ${destination.toUpperCase()}`}</Text>
          <Text fontSize={15}>{`${equipment}`}</Text>
        </div>
        <div style={styles.right}>
          <Text fontSize={15} bold>{`$${parseFloat(minBidPilot).toFixed(
            2
          )} | $${parseFloat(minBidCrew).toFixed(2)}`}</Text>
          <Text fontSize={11}>{`${(parseInt(duration) / 60).toFixed(
            2
          )} hours`}</Text>
        </div>
      </div>
      <HorizontalBar />
    </div>
  );
}
