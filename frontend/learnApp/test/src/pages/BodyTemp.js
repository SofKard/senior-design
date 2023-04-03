import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default function BodyTemp({ navigation}) {
    const [bodyVal, setBodyVal] = useState(0)
    const [currentRisk, setCurrentRisk] = useState(1)
    const [ risk, setRisk] = useState([
      {
        image: require("../../assets/1.png")
      },
      {
        image: require("../../assets/2.png")
      }
    ])

    const pullBodyTemp = () => {
      firebase.database().ref('/').once('value')
      .then(snapshot => {

      console.log(snapshot.child("bodyTemp").val());
      setBodyVal(snapshot.child("bodyTemp").val());

      snapshot.child("bodyTemp").val() > 101 ? setCurrentRisk(0) : setCurrentRisk(1);

      // do something with the data
      }).catch(error => {

      console.error(error);
    
      });

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => pullBodyTemp()}>
                <Image style={styles.sensorLevels1} source={require("../../assets/refresh.png")} />
                <Image style={styles.riskImg} source={risk[currentRisk].image} /> 
            </TouchableOpacity>
            <Text style={styles.value}>
                Body Temp: {bodyVal}
            </Text>
        </View>
    ); // for risk pick pic based on warning level
}

const primaryColor = "#3A0CA3";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    paddingTop:40
  },
  sensorLevels1:{
    position:'absolute',
    marginLeft:320,
    width:50,
    height:50,
  },
  value:{
    fontWeight:"bold",
    fontSize: 50,
    color:"white",
    alignItems: 'center',
    marginTop:150
  },
  riskImg:{
    width:373,
    height:350,
    marginTop: 100,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  }
})