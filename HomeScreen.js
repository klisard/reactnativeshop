import React from 'react';
// import * as React from 'react';
import { StyleSheet } from 'react-native'; //---
// import { StyleSheet, Text, View } from 'react-native'; //---
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { ProductsList } from './screens/ProductsList';
import { ProductDetails } from './screens/ProductDetails';
import { Cart } from './screens/Cart';
import { CartIcon } from './components/CartIcon';
import { CartProvider } from './CartContext';

// import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';
// // import Cart from './screens/Cart';
// import Profile from './screens/Profile';
// import Ionic from "react-native-vector-icons/Ionicons"

// import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
  return (
    <CartProvider>
      {/* <NavigationContainer> */}
        <Stack.Navigator>
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
        
      {/* </NavigationContainer> */}
    </CartProvider>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  }
});
