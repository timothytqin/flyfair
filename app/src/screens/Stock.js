import React, { useState } from "react";
import { View, Dimensions, FlatList } from "react-native";
import { Text } from "react-native-elements";
import Container from "../components/Container";
import { SlideAreaChart } from "react-native-slide-charts";
import StockPreview from "../components/StockPreview";
import BlurredStatusBar from "../components/BlurredStatusBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import StockDetail from "../components/StockDetail";

const stocks = require('../data/stonks.json');
const stock_timeseries = require('../data/stock_timeseries.json');
const processedStocks = []
for (let i = 0; i < stocks.length; i++) {
  console.log("expensive loop is run")
  const stock = stocks[i];
  const data = stock_timeseries[i];
  const x = data.chart.result[0].timestamp.filter((item, index) => index % 5 == 0).map(
    (timestamp) => new Date(timestamp * 1000)
  );
  const y = data.chart.result[0].indicators.quote[0].open.filter((item, index) => index % 5 == 0);
  const range = [Math.max(...y), Math.min(...y)];
  const processed_data = x.map((timestamp, i) => {
    return { x: timestamp, y: y[i] };
  });
  const price = y[y.length - 1];
  const change = (price - y[0]) / y[0];
  processedStocks.push({ ...stock, data: processed_data, range, price, change })
}

const Stock = () => {
  const stocks = processedStocks

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
  return (
    <>
      <BlurredStatusBar
        children={
          <View style={{ marginVertical: 70 }}>
            <Text
              h1
              h1Style={{
                fontWeight: "800",
                fontSize: 50,
                marginLeft: 30,
                marginTop: 30,
                marginBottom: 10,
              }}
            >
              Stocks
            </Text>

            <FlatList
              data={stocks}
              renderItem={renderStock}
              keyExtractor={(item) => item.ticker}
            />
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
};

export default Stock;
