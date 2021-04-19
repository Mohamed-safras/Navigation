import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";

import data from "./data";

const { width, height } = Dimensions.get("screen");

const Indicator = ({ scrollx }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 40,

        flexDirection: "row",
      }}
    >
      {data.map((_, i) => {
        const scale = scrollx.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.9, 1, 0.9],
          extrapolate: "clamp",
        });
        const opacity = scrollx.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: [0.1, 0.9, 0.1],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i}
            style={{
              height: 3,
              width: width / data.length,
              borderRadius: 5,
              backgroundColor: "#ffffff",
              margin: 1,

              opacity,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};

const Status = () => {
  const scrollx = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.continer}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        contentContainerStyle={{ alignItems: "center" }}
        data={data}
        bounces={false}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: item.image }}
                style={{
                  resizeMode: "cover",
                  width,
                  height,
                }}
              />
            </View>
          );
        }}
      />
      <Indicator scrollx={scrollx} />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
