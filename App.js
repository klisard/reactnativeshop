import React from 'react';
import { StyleSheet } from 'react-native'; 
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CartProvider } from './CartContext';

import HomeScreen from './HomeScreen';
import Profile from './screens/Profile';
import Learn from './screens/Learn';
import Ionic from "react-native-vector-icons/Ionicons"


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function App() {

  return (
    <CartProvider>

    <SafeAreaProvider>
      <NavigationContainer>
                  
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({focused, size,colour}) => {
          let iconName;
          if(route.name === "Home"){
              iconName = focused ? 'ios-home': 'ios-home-outline'; 
          } else if(route.name === "Profile"){
          iconName = focused ? 'man': 'man-outline'; 
          } else if(route.name === "Learn"){
          iconName = focused ? 'book': 'book-outline'; 
          };
          return <Ionic name={iconName} size={size} colour={colour}/>
          },
          headerStyle: { backgroundColor: 'orange' }
          
          }) 
        }>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Learn" component={Learn}/>
          <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },

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
export default App;