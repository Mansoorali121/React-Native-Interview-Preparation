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
            <Text style={{ color: '#fff', fontFamily:"Outfit-Regular" }}>Order Now</Text>
          </View>
        </View>
        <View>
          <Image source={require('../assets/slice.png')} style={styles.image} />
        </View>
       
      </View>
       <View style={styles.categorytext}> 
          <Text style={styles.text1}>Category</Text>
          <Text style={styles.text2}>See all</Text>
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
  button: {
    backgroundColor: '#000',
    marginTop: vs(20),
    alignItems: 'center',
    justifyContent: 'center',
    width:s(90),
    paddingVertical:vs(5),
    borderRadius:s(45)
  },
  categorytext:{flexDirection:"row", justifyContent:"space-between"},
  text1:{fontSize:s(15),fontFamily:"Outfit-SemiBold"},
  text2:{color:"gray",fontFamily:"Outfit-Light"},
});
