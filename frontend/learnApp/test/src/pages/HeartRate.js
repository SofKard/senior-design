import { NavigationHelpersContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function HeartRate({ navigation}) {
    const [heartVal, setHRVal] = useState(0)

    const pullHR = () => {
        setHRVal(heartVal+1)
      }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => pullHR()}>
                <Image style={styles.header} source={require("../../assets/heartrate.jpg")} />
            </TouchableOpacity>
            <Text style={styles.value}>
                {heartVal}
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
    paddingTop:80
  },
  header:{
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
  value:{
    fontWeight:"bold",
    fontSize: 50,
    color:"white",
    marginTop:400
  }
})