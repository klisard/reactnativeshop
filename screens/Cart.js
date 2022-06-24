import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ScrollView } from 'react-native';
import { CartContext } from '../CartContext';
import { PayPalButton } from "react-paypal-button-v2";
// import { ScrollView } from 'react-native-gesture-handler';
export function Cart({ navigation }) {
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

    function Totals() {
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice());
        });
        return (
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.lineRight}>$ {total}</Text>
            </View>
        );
    }
    function renderItem({item}) {
        return (
            <View style={styles.cartLine}>
               <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
               <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
            </View>
        );
    }
    
    return (
      <View style={styles.cartLinePay}>
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={Totals}
        />
        <ScrollView>
        <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
      </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  cartLinePay:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 150,
    paddingRight: 150,
  }
});