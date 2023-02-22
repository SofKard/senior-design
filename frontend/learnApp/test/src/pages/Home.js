import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App({ navigation}) {
  const [currentRisk, setCurrentRisk] = useState(0)
  const [ risk, setRisk] = useState([
    {
      image: require("../../assets/welcome.jpg")
    },
    {
      image: require("../../assets/heartrate.jpg")
    },
    {
      image: require("../../assets/gsr.jpg")
    }
  ])

  const pullValues = () => {
    setCurrentRisk((currentRisk+1)%3) // edit 3 here to change how many there are
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View  style={{width:"90%"}}>
        <TouchableOpacity onPress={() => pullValues()}>
          <Image style={styles.drawerIc} source={require("../../assets/welcome.jpg")} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={{flexDirection:"row"}}>
          <Image style={styles.headerIc} source={require("../../assets/gsr.jpg")} />
          <View style={styles.headerInfo}>
            <Text style={styles.headerWelcome}>hi!</Text>
            <Text style={styles.headerProfile}>profile name?</Text>
          </View>
        </View>
      </View>
      <View style={{width:"90%"}}>
        <Text style={styles.discoverTxt}>your risk:</Text>
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
  headerIc:{
    width:50,
    height:50,
    marginRight:10
  },
  riskImg:{
    width:373,
    height:300,
    marginBottom:30,
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
    fontFamily:"Rubik_400Regular",    
  },
  headerProfile:{
    color:"white",
    fontFamily:"Rubik_700Bold",    
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
    fontFamily:"Rubik_700Bold",
    fontWeight:"bold",
    fontSize: 28,
    color:"white",
    marginBottom:30
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
    fontFamily:"Rubik_500Medium",    
    fontSize: 18,
    color:"#B4ADC6",
    fontWeight:"bold",
    marginVertical:10,
    paddingLeft: 25
  }
})