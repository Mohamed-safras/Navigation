import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  Animated,
} from "react-native";

import Data from "./Data";
import Indicator from "./Indicator";
const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const { width, height } = Dimensions.get("screen");

const Backdrop = ({ scrollx }) => {
  const backgroundColor = scrollx.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const Squre = ({ scrollx }) => {
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: "blue",
        borderRadius: 90,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate: "35deg",
          },
        ],
      }}
    />
  );
};

const Chat = () => {
  const scrollx = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.continer}>
      <Backdrop scrollx={scrollx} />
      <Squre scrollx={scrollx} />
      <Animated.FlatList
        data={Data}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        pagingEnabled
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ alignItems: "center" }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                width: width,
                alignItems: "center",
                padding: 20,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: "contain",
                  }}
                  source={{ uri: item.image }}
                />
              </View>
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "800",
                    fontSize: 22,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ color: "#fff", fontSize: 18, marginTop: 10 }}
                  numberOfLines={1}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollx={scrollx} />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
