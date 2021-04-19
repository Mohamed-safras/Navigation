import React from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
const { width } = Dimensions.get("screen");

import Data from "./Data";

const Indicator = ({ scrollx }) => {
  return (
    <View style={{ position: "absolute", bottom: 50, flexDirection: "row" }}>
      {Data.map((_, i) => {
        const scale = scrollx.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.4, 0.9, 0.4],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 9,
              width: 9,
              borderRadius: 5,
              backgroundColor: "#111",
              margin: 10,
              opacity,
              transform: [
                {
                  scale,
                },
              ],
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({});
