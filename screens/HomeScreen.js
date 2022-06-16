import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
            <SafeAreaView>
              <Text>
                Hello
              </Text>
              <Ionic name="home"></Ionic>
            </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e8ca46',
    },
  
    img: {
      width: 150,
      height: 200,
      bottom: 20,
    },
  
    button: {
      width: 315,
      height: 70,
      alignItems: "center",
      backgroundColor: "red",
      borderRadius: 5,
  
  
    },
    buttonText:{
      display: 'flex',
      fontSize: 50,
      alignItems:'center',
      color:'white',
      justifyContent: 'center',
  
    },
    cranStyl:{
      paddingTop: 30,
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 55,
  
    },
    skp:{
      fontWeight: 'bold',
      fontSize: 20,
    }
  });
  