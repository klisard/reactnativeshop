import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import {AuthContext} from '../context/auth-context'
import firebase from '../firebase';

export default function Dashboard(props) {
  const [user, setUser] = React.useContext(AuthContext);

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text> Welcome {user.email}</Text>
      <TouchableOpacity
        onPress={signOut}
        style={{
          textAlign: 'center',
          padding: 8,
          marginHorizontal: 8,
          backgroundColor: '#cccccc',
        }}>
        <Text>LOG OUT </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});