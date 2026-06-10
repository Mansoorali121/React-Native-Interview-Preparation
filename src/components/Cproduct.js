import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Cproduct = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.cardcontainer}>
        <View>
          <Image
            source={require('../assets/burger/roasted.png')}
            style={styles.image}
          />
        </View>
        <View style={{ marginTop: s(-20) }}>
          <Text style={styles.title}>Roasted Chicken</Text>
        </View>
        <View style={styles.buttcontainer}>
          <Text style={styles.roundbutton}>-</Text>
          <Text style={styles.text}>02</Text>
          <Text style={styles.roundbutton}>+</Text>
        </View>
      </View>
      <View style={styles.pricecontaienr}>
        <Text style={styles.text}>$12.00 </Text>
        <Text style={[styles.text,{color:"gray"}]}>$24.00 </Text>
      </View>
    </View>
  );
};

export default Cproduct;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(10),
    marginHorizontal: s(20),
    backgroundColor: '#fafafa',
    borderRadius: s(12),
    height: vs(100),
  },
  image: { height: vs(100), width: s(100), },
  cardcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: s(10),
    
  },
  buttcontainer: { flexDirection: 'row', marginTop: s(-20), gap: s(10) },
  pricecontaienr: {
    flexDirection: 'row',
    position: 'absolute',
    top: s(80),
    marginLeft: s(120),
    gap: s(80),
    marginHorizontal: s(20),
  },
  roundbutton:{backgroundColor:"#FF7A45",paddingHorizontal:s(7),borderRadius:s(30), color:"#ffff"},
  text:{fontFamily:"Outfit-Medium"},
  title:{fontFamily:"Outfit-Medium", fontSize:s(14)}
});
