import React from "react";
const Tab = createMaterialTopTabNavigator();
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "../../screens/Calls";
import Chat from "../../screens/Chat";
import Status from "../../screens/Status";
const materialTopTap = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default materialTopTap;
