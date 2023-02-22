import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/pages/Home";
import GSR from "./src/pages/GSR";
import HeartRate from "./src/pages/HeartRate";
import BodyTemp from "./src/pages/BodyTemp";
import Starter from "./src/pages/Starter"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Starter">
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Starter" component={Starter} />
        <Stack.Screen options={{headerShown:false}} name="GSR" component={GSR} />
        <Stack.Screen options={{headerShown:false}} name="HeartRate" component={HeartRate} />
        <Stack.Screen options={{headerShown:false}} name="BodyTemp" component={BodyTemp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}