import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import flatlistdata from '../flatListData.json';

export default function Info({ navigation, route }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'orange', height: 180, zIndex: 0 }}>
        <View
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            width: '80%',
            backgroundColor: 'white',
            padding: 16,
            textAlign: 'left',
            marginBottom: 35,
            marginTop: 35,
          }}>
          <Text style={{ fontSize: 20 }}> {route.params.caption}</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            //borderRadius: 20,
            borderWidth: 5,
            //borderRightWidth: 0,
            borderColor: 'orange',
            width: '90%',
            height: 'auto',
            backgroundColor: 'white',
            padding: 10,
            //textAlign: 'center',
            marginBottom: 35,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 15 }}>
            {route.params.text == null
              ? 'Sorry!! This is empty for now.'
              : route.params.text}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    //padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    //textAlign: 'start',
  },
});
