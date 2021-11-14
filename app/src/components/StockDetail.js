import { BlurView } from "expo-blur";
import React from "react";
import { View, Dimensions, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { SlideAreaChart } from "react-native-slide-charts";
import { LinearGradient, Stop } from "react-native-svg";
import BottomSheet from "reanimated-bottom-sheet";
import Reddit from "./Reddit";

const StockDetail = ({ ticker, data, price, change, range, name }) => {
  const color = change > 0 ? "#66CD00" : "#FF3232";
  const fillGradient = (props) => {
    return (
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" {...props}>
        <Stop stopColor={color} offset="0%" stopOpacity="0.2" />
        <Stop stopColor="#FFFFFF" offset="100%" stopOpacity="0.2" />
      </LinearGradient>
    );
  };
  const posts = reddit[ticker];
  const comment_sentiment_average =
    posts.reduce((accumulator, a) => {
      return accumulator + a.comment_sentiment_average;
    }, 0) / posts.length;
  const renderPost = ({ item }) => {
    return <Reddit {...item} />;
  };
  return (
    <BlurView style={styles.bg} intensity={100}>
      <ScrollView style={{ paddingHorizontal: 30 }}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.subtitle}>
            <Text style={styles.ticker}>{ticker}</Text>
            <Text style={[styles.price, { color: color }]}>${price}</Text>
            <View
              style={{
                padding: 10,
                backgroundColor:
                  comment_sentiment_average > 0
                    ? "rgb(67, 137, 183)"
                    : "rgb(190, 50, 50)",
                borderRadius: 10,
                marginLeft: "auto",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {comment_sentiment_average.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <SlideAreaChart
          data={data}
          width={Dimensions.get("window").width - 60}
          height={200}
          yRange={range}
          renderFillGradient={fillGradient}
          chartLineColor={color}
          yAxisProps={{
            showBaseLine: false,
            verticalLineWidth: 0,
          }}
          cursorProps={{ cursorColor: "#333" }}
          toolTipProps={{
            displayTriangle: false,
            fontSize: 15,
            borderRadius: 10,
            toolTipTextRenderers: [
              ({ x, y, scaleX, scaleY }) => {
                return {
                  text:
                    "" +
                    new Date(scaleX.invert(x)).toLocaleDateString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                    }) +
                    "\n$" +
                    scaleY.invert(y).toFixed(2),
                };
              },
            ],
          }}
          style={{ marginBottom: 40 }}
        />
        <View style={styles.row}>
          <Text style={styles.ticker}>Change</Text>
          <Text style={styles.stat}>{change.toFixed(2)}%</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.ticker}>High</Text>
          <Text style={styles.stat}>${range[1].toFixed(2)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.ticker}>Low</Text>
          <Text style={styles.stat}>${range[0].toFixed(2)}</Text>
        </View>
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.title}
          style={{ marginTop: 30 }}
        />
      </ScrollView>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 0,
    height: 570,
  },
  subtitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 30,
  },
  name: {
    fontWeight: "800",
    fontSize: 30,
  },
  ticker: {
    fontSize: 20,
    fontWeight: "700",
  },
  price: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "800",
  },
  stat: {
    fontSize: 19,
    fontWeight: "800",
    color: "grey",
    marginLeft: 20,
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
});

const reddit = require("../data/data.json");

export default StockDetail;
