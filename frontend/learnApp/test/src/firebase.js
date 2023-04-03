import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/pages/Home";
import GSR from "./src/pages/GSR";
import HeartRate from "./src/pages/HeartRate";
import BodyTemp from "./src/pages/BodyTemp";
import Starter from "./src/pages/Starter";
import firebase from 'firebase/app';

const Stack = createStackNavigator();


class App extends React.Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCEg3-OzQXBT6dquGlZyxkgnyibokZTTBQ",
      authDomain: "senior-design-eba4c.firebaseapp.com",
      databaseURL: "https://senior-design-eba4c-default-rtdb.firebaseio.com",
      projectId: "senior-design-eba4c",
      storageBucket: "senior-design-eba4c.appspot.com",
      messagingSenderId: "415664524416",
      appId: "1:415664524416:web:6eda87601e117b6185ea65",
      measurementId: "G-MJE0YZV3JM"
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
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
}
