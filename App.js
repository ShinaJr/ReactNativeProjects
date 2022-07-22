import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./component/home";
import Details from "./component/details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} //jsx
        />
        <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }} //jsx
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
