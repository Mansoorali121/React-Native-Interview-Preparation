import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Discountcard = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.cardcontainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Order a set With</Text>
          <Text style={styles.text}>40% Discount</Text>
             <View style={styles.button}>
            <Text style={{backgroundColor:"#0000"}}>Order Now</Text>
          </View>
        </View>
        <View>
          <Image source={require('../assets/slice.png')} style={styles.image} />
        </View>
        
      </View>
      
    </View>
  );
};

export default Discountcard;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    backgroundColor: '#c7e0ae',
    height: vs(130),
    borderRadius: s(20),
  },
  textcontainer: { marginTop: vs(20) },
  image: { height: vs(140), width: s(140) },
  cardcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(10),
  },
  text: { fontFamily: 'Outfit-Light', fontSize: s(18) },
  button: { backgroundColor: '#0000' },
});
