import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import { createAppContainer, createStackNavigator } from 'react-navigation';
import flatlistdata from '../flatListData.json';
import Info from '../components/Info';

const Stack = createStackNavigator();

export default function LearnList({ navigate, route }) {
  return (
    <Stack.Navigator
        //hidding header of learn screen, cause problem on going back 
        // screenOptions={{
        //     headerShown: false
        // }}
        >
      <Stack.Screen
        name="Learn"
        component={Learn}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Learn({ navigation, route }) {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        numColumns={2}
        const
        data={flatlistdata.articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Info', {
                caption: item.caption,
                text: item.text,
              })
            }
            style={{
              borderRadius: 20,
              //borderWidth: 5,
              padding: 10,
              margin: '2.5%',
              width: '45%',
              backgroundColor: 'orange',
            }}>
            <Image source={{ uri: item.uri }} style={styles.itemImage} />
            <Text style={styles.heading}>{item.caption}</Text>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'white',
    //flexDirection: 'row'
  },
  heading: {
    //paddingBottom: 20,
    //margin: 5,
    fontSize: 14,
    fontWeight: 'bold',
    //color: 'black',
    textAlign: 'left',
    //alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    borderRadius: 15,
  },
});
