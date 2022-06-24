import React from 'react';
// import * as React from 'react';
import { StyleSheet } from 'react-native'; //---
// import { StyleSheet, Text, View } from 'react-native'; //---
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { ProductsList } from './screens/ProductsList';
// import { ProductDetails } from './screens/ProductDetails';
import { Cart } from './screens/Cart';
import { CartIcon } from './components/CartIcon';//--
import { CartProvider } from './CartContext';

import HomeScreen from './HomeScreen';
import Profile from './screens/Profile';
import DetailScreen from './screens/DetailScreen';
import Learn from './screens/Learn';
// import Cart from './screens/Cart';
import Ionic from "react-native-vector-icons/Ionicons"

// import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CartProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList}
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
        </NavigationContainer> 
        <NavigationContainer>*/}
          
        <Tab.Navigator screenOptions={({route}) => ({tabBarIcon: 
          ({focused, size,colour}) => {
          let iconName;
          if(route.name === "Home"){
              iconName = focused ? 'ios-home': 'ios-home-outline'; 
          } else if(route.name === "Details"){
            iconName = focused ? 'information-circle': 'information-circle-outline'; 
          } else if(route.name === "Cart"){
            iconName = focused ? 'cart': 'cart-outline'; 
          } else if(route.name === "Profile"){
          iconName = focused ? 'man': 'man-outline'; 
          } else if(route.name === "Learn"){
          iconName = focused ? 'book': 'book-outline'; 
          };
          return <Ionic name={iconName} size={size} colour={colour}/>
          },
          })
        }>
          <Tab.Screen name="Home" component={HomeScreen}
          // options={({ navigation }) => ({
          //   title: 'Products',
          //   headerTitleStyle: styles.headerTitle,
          //   headerRight: () => <CartIcon navigation={navigation}/>
          // })}
          />
          {/* <Tab.Screen name="Details" component={DetailScreen}/> */}
          <Tab.Screen name="Cart" component={Cart}/>
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