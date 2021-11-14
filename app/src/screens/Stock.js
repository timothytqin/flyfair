import React, { useState } from "react";
import {
  View,
  Dimensions,
  FlatList,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";

import { Text } from "react-native-elements";
import Container from "../components/Container";
import { SlideAreaChart } from "react-native-slide-charts";
import StockPreview from "../components/StockPreview";
import BlurredStatusBar from "../components/BlurredStatusBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import StockDetail from "../components/StockDetail";
import { useFonts } from "expo-font";
import { theme } from "../theme.js";

const stocks = require("../data/stonks.json");
const stock_timeseries = require("../data/stock_timeseries.json");
const processedStocks = [];
for (let i = 0; i < stocks.length; i++) {
  console.log("expensive loop is run");
  const stock = stocks[i];
  const data = stock_timeseries[i];
  const x = data.chart.result[0].timestamp
    .filter((item, index) => index % 5 == 0)
    .map((timestamp) => new Date(timestamp * 1000));
  const y = data.chart.result[0].indicators.quote[0].open.filter(
    (item, index) => index % 5 == 0
  );
  const range = [Math.max(...y), Math.min(...y)];
  const processed_data = x.map((timestamp, i) => {
    return { x: timestamp, y: y[i] };
  });
  const price = y[y.length - 1];
  const change = (price - y[0]) / y[0];
  processedStocks.push({
    ...stock,
    data: processed_data,
    range,
    price,
    change,
  });
}

const Stock = () => {
  const stocks = processedStocks;

  const [fontLoaded] = useFonts({
    B: require("../assets//b.ttf"),
    M: require("../assets/m.ttf"),
    R: require("../assets/r.ttf"),
  });

  const [stockSelected, setStockSelected] = useState(null);

  const sheetRef = React.useRef(null);

  const renderContent = ({ stockSelected }) => {
    return stockSelected ? (
      <StockDetail
        ticker={stockSelected.ticker}
        data={stockSelected.data}
        price={stockSelected.price}
        change={stockSelected.change}
        range={stockSelected.range}
        name={stockSelected.name}
        key={stockSelected.ticker}
      />
    ) : null;
  };

  const renderStock = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setStockSelected(item);
        sheetRef.current.snapTo(0);
      }}
    >
      <StockPreview
        ticker={item.ticker}
        data={item.data}
        price={item.price}
        change={item.change}
        range={item.range}
        key={item.ticker}
      />
    </TouchableOpacity>
  );

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <>
        <BlurredStatusBar
          children={
            <View style={styles.container}>
              <ImageBackground
                source={require("../assets/bg-app.png")}
                style={{ width: "100%", height: "100%" }}
                imageStyle={{ resizeMode: "cover" }}
              >
                <View style={{ marginTop: "20%" }}></View>
                <View
                  style={{ flexDirection: "row", paddingHorizontal: "10%" }}
                >
                  <Text
                    style={{
                      fontFamily: "B",
                      fontSize: 35,
                      color: theme.grey,
                      textAlignVertical: "center",
                    }}
                  >
                    Stocks
                  </Text>
                </View>
                <View style={{ marginVertical: 0 }}>
                  <FlatList
                    data={stocks}
                    renderItem={renderStock}
                    keyExtractor={(item) => item.ticker}
                  />
                </View>
              </ImageBackground>
            </View>
          }
        />
        <BottomSheet
          ref={sheetRef}
          snapPoints={[550, 400, 0]}
          borderRadius={20}
          renderContent={() => renderContent({ stockSelected })}
          initialSnap={2}
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    backgroundColor: theme.black,
  },
});

export default Stock;
