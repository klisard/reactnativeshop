import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import firebase from '../firebase';
import {AuthContext} from '../context/auth-context'

export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [resetMail, setResetMail] = React.useState('');

  const [hidePassword, setHidePassword] = React.useState(true);

  const [user, setUser] = React.useContext(AuthContext);

  const reset = async () => {
    try{
      const auth = firebase.auth();
      await auth.sendPasswordResetEmail(resetMail);
      window.alert("email sent");
    }catch(error){
      window.alert("error occoured");
    }
  };

  const logIn = async ({ email, password }) => {
    const auth = firebase.auth();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      setUser(user);
    } catch (error) {
      window.alert(error);
      setUser(null);
    }
  };

  const signUp = async ({ email, password }) => {
    const auth = firebase.auth();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      window.alert('User created successfully!');
    } catch (error) {
      window.alert(error);
    }
  };

  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type Email Here"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Type Password Here"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={hidePassword}
      />
      <TouchableOpacity
          onPress={() => setHidePassword(prev => !prev)}
          style={{
            textAlign: 'center',
            padding: 8,
            marginHorizontal: 8,
          }}>
          <Text>{hidePassword ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <TouchableOpacity
          onPress={() => logIn({ email, password })}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: 8,
            marginHorizontal: 8,
            backgroundColor: 'deepskyblue',
          }}>
          <Text>Log In </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => signUp({ email, password })}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: 8,
            marginHorizontal: 8,
            backgroundColor: '#aaf',
          }}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 16 }}></View>
      <Text>Forgot Password Reset it Now</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TextInput
          style={[{ flex: 1 }, styles.input]}
          onChangeText={setResetMail}
          value={resetMail}
        />
        <TouchableOpacity
          onPress={reset}
          style={{
            textAlign: 'center',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 16,
            marginHorizontal: 8,
            backgroundColor: '#aaf',
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
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
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    outlineColor: 'white',
    borderRadius: 8,
    fontSize: 16,
    marginVertical: 4,
  },
});
