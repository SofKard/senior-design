import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList } from 'react-native';

export default function Starter( {navigation}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [ steps, setSteps] = useState([
    {
      image: require("../../assets/3.png"),
      title: "Welcome!",
      description: "This is Heat Check, a tool to help you monitor your heatstroke likelihood and dehydration levels. The next two pages will show you our warning labels, so you can keep track of your risk levels at a given time."
    },
    {
      image: require("../../assets/2.png"),
      title: "Low Risk Warning",
      description: "This is the low risk warning. If you see this on your application, make sure to stay hydrated and take care of your body, but the sensors are not reporting any information to imply you were in immediate risk."
    },
    {
      image: require("../../assets/1.png"),
      title: "High Risk Warning",
      description: "This is the high risk warning. If you see this on your mobile application, take action. The device is reporting dangerous body levels, so drink some water and go inside and try to cool down."
    },
    {
      image: require("../../assets/3.png"),
      title: "Get Started",
      description: "Now that you have learned about our device, you are ready to start! The next page will ask for a few metrics to better fit the device to your body."
    }
  ])
  const nextStep = () => {
    setCurrentStep(currentStep >= 3 ? 3 : currentStep+1) // edit 3 here to change how many there are
  }

  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep-1)
  }
  return (
    <View style={styles.container}>
      <Image source={steps[currentStep].image} style={styles.stepImage} resizeMode="cover"/>
      <View style={styles.stepIndicatorView}>
        {steps.map((step, index) => {
          return (
            <View style={{...styles.stepIndicator, 
              width: currentStep === index ? 40 : 30,
              backgroundColor:  currentStep === index ? "#A838D7" : "gray"
            }}></View>
          )
        })}
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <Text style={styles.description}>{steps[currentStep].description}</Text>
      <View style={styles.navigationView}>
        {
          currentStep > 0 ? 
            <TouchableOpacity 
              onPress={() => prevStep()}
              style={{...styles.navigationBtn, borderTopEndRadius: 20, borderBottomEndRadius:20,}}>
              <Text style={styles.navigationBtnTxt}>Back</Text>
            </TouchableOpacity>
            :
            <View></View>
        }
        {
          currentStep < 3 ? 
            <TouchableOpacity 
              onPress={() => nextStep()}
              style={{...styles.navigationBtn, borderTopStartRadius: 20, borderBottomStartRadius:20}}>
              <Text style={styles.navigationBtnTxt}>Next</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            style={{...styles.navigationBtn, borderTopStartRadius: 20, borderBottomStartRadius:20}}>
            <Text style={styles.navigationBtnTxt}>GO!</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepImage: {
    width: "90%",
    height: "50%",
    marginVertical: 30
  },
  stepIndicatorView: {
    flexDirection: "row"
  },
  stepIndicator: {
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: 10
  },
  navigationView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  navigationBtn: {
    backgroundColor: "#A838D7",
    height: 40,
    width: 80,
    justifyContent:"center",
    alignItems:"center"
  },
  navigationBtnTxt: {
    color: "white",
    fontWeight: "bold"
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
  }
});

