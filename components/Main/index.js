import React from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import materialTopTap from "../TabNavigation";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={({ navigation, route }) => ({
              title: "WhatsApp",
              headerRight: () => {
                return (
                  <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.search}>
                      <Icon name="search" size={26} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="more-vertical" size={26} />
                    </TouchableOpacity>
                  </View>
                );
              },
            })}
            name="home"
            component={materialTopTap}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  headerRight: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  search: {
    marginHorizontal: 5,
  },
});
