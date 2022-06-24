import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { Product } from '../components/Product';
import { getProducts } from '../services/ProductsService';


export function Login({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.img}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://i.ibb.co/NY0P0yk/Logo.png',
        }}
      />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style={styles.cranStyl}>Create an account</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style={styles.skp}>Skip</Text>
      </TouchableOpacity>

    </SafeAreaView>

    );
}


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

 