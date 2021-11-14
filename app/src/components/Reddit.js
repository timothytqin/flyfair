import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

const Reddit = ({ title, link, date, comment_sentiment_average }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 15,
          borderTopWidth: 1,
          borderTopColor: "#0F64A4",
        }}
      >
        <View style={{ width: 200 }}>
          <Text
            numberOfLines={2}
            style={{ color: "#0F64A4", fontWeight: "normal" }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor:
              comment_sentiment_average > 0
                ? "rgb(67, 137, 183)"
                : "rgb(190, 50, 50)",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {comment_sentiment_average.toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Reddit;
