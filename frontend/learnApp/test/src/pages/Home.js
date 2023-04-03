import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default function App({ navigation}) {
  const [currentRisk, setCurrentRisk] = useState(1)
  const [ risk, setRisk] = useState([
    {
      image: require("../../assets/1.png")
    },
    {
      image: require("../../assets/2.png")
    }
  ])

  const pullValues = () => {
    firebase.database().ref('/').once('value')
    .then(snapshot => {

    console.log(snapshot.child("danger").val());

    snapshot.child("danger").val() == true ? setCurrentRisk(0) : setCurrentRisk(1);

    // do something with the data
    }).catch(error => {

    console.error(error);
  
    });

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View  style={{width:"90%"}}>
        <TouchableOpacity onPress={() => pullValues()}>
          <Image style={styles.refresh} source={require("../../assets/refresh.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={{flexDirection:"row"}}>
          <Image style={styles.avatar} source={require("../../assets/avatar.jpg")} />
          <View style={styles.headerInfo}>
            <Text style={styles.headerWelcome}>Welcome!</Text>
            <Text style={styles.headerProfile}>USER12345</Text>
          </View>
        </View>
      </View>
      <View style={{width:"90%"}}>
        <Text style={styles.discoverTxt}>risk level:</Text>
        <Image style={styles.riskImg} source={risk[currentRisk].image} /> 
      </View>
      <View style={styles.destinationsView}>
        <Text style={styles.destinationsTxt}>Check Levels</Text>
        <TouchableOpacity onPress={() => navigation.navigate('GSR')}>
          <Image style={styles.sensorLevels1} source={require("../../assets/heartrate.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HeartRate')}>
          <Image style={styles.sensorLevels2} source={require("../../assets/heartrate.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BodyTemp')}>
          <Image style={styles.sensorLevels3} source={require("../../assets/heartrate.jpg")} />
        </TouchableOpacity>
      </View>
      

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
  drawerIc: {
    width: 35,
    height:35
  },
  avatar:{
    width:60,
    height:60,
    marginRight:10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  riskImg:{
    width:373,
    height:350,
    marginBottom:10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  header:{
    flexDirection:"row",
    marginTop:10,
    justifyContent:"space-between",
    width:"90%",
    marginBottom:25
  },
  headerInfo:{
    justifyContent:"center",
  },
  headerWelcome:{
    color:"white",
  },
  headerProfile:{
    color:"white",
    fontSize: 16
  },
  inputView:{
    backgroundColor:"white",
    width:"90%",
    height:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginBottom: 25
  },
  input: {
    width:"80%",
    height:45,
    marginLeft:10,
    fontSize:20,
  },
  discoverTxt: {
    fontWeight:"bold",
    fontSize: 28,
    color:"white",
    marginBottom:10
  },
  destinationsView:{
    backgroundColor:"white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width:"100%",
    flex:1,
  },
  sensorLevels1:{
    backgroundColor:"white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position:'absolute',
    marginLeft:5,
    width:160,
    height:160,
  },
  sensorLevels2:{
    backgroundColor:"white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position:'absolute',
    width:160,
    height:160,
    marginLeft:125,
    marginTop:120,
  },
  sensorLevels3:{
    backgroundColor:"white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position:'absolute',
    width:160,
    height:160,
    marginLeft:245,
  },
  destinationsTxt:{
    fontSize: 18,
    color:"#B4ADC6",
    fontWeight:"bold",
    marginVertical:10,
    paddingLeft: 25
  },
  refresh:{
    position:'absolute',
    marginLeft:300,
    backgroundColor: primaryColor,
    width:75,
    height:75,
  }
})