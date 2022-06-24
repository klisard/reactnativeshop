
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Constants from 'expo-constants';
// import firebase from './firebase';
import firebase from 'firebase/compat';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import { AuthContext } from '../context/auth-context';
const Root = createStackNavigator();

function Profile() {
  const [user, setUser] = React.useState(null); 

  return (
    <AuthContext.Provider value={[user, setUser]}>
        {
          user ? <Dashboard /> : <Login />
        }
    </AuthContext.Provider>
  );
}


export default Profile