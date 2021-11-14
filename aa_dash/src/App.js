import React, { useEffect } from "react";
import bg from "./assets/bg-web.png";

import flights from "./data/flights.json";
import bids from "./data/bids.json";

import AddFlight from "./components/AddFlight";
import FlightList from "./components/FlightsList";
import FlightDetails from "./components/FlightDetails";
import Header from "./components/Header";

function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      padding: "0em 4em 2em 4em",
    },
    title: {
      color: "#FFF",
    },
    panel: {
      display: "flex",
      backgroundColor: "#FFF",
      borderRadius: "8px",
    },
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div style={styles.container}>
        <Header />
        <div style={{ display: "flex", flex: 1 }}>
          <FlightList data={flights.data} bids={bids.data} />
          <FlightDetails data={flights.data[0]} bids={bids.data} />
          {/* <AddFlight /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
