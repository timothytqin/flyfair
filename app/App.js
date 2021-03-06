import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/login";
import Stock from "./src/screens/Stock";
import Home from "./src/screens/home";
import Bids from "./src/screens/bids";
import Crewlogin from "./src/screens/crewlogin";
import Crewhome from "./src/screens/crewhome";
import Bid from "./src/screens/bid";
import Wallet from "./src/screens/wallet";
import Findride from "./src/screens/findride";
import Rides from "./src/screens/rides";
import Ride from "./src/screens/ride";
import Insurance from "./src/screens/insurance";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Crewlogin"
        component={Crewlogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Crewhome"
        component={Crewhome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bids"
        component={Bids}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bid"
        component={Bid}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Findride"
        component={Findride}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rides"
        component={Rides}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ride"
        component={Ride}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Insurance"
        component={Insurance}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("app", () => App);
