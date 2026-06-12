import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Homeheader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilecontainer}>
        <TouchableOpacity>
          <Image source={require('../assets/man.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemscontainer}>
        <Image source={require('../assets/pin.png')} style={styles.image2} />
        <Text style={styles.cityname}>New York</Text>
        <Image
          source={require('../assets/down-arrow.png')}
          style={styles.image2}
        />
      </View>
       <View style={styles.cartcontainer}>
        <TouchableOpacity>
          <Image source={require('../assets/shopping-cart.png')} style={styles.cartimage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homeheader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: s(20),
    marginTop: vs(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: { height: vs(35), width: s(35) },
  profilecontainer: {
    backgroundColor: '#eeee',
    paddingVertical: s(3),
    paddingHorizontal: s(3),
    borderRadius: s(18),
  },
  image2: { height: vs(20), width: s(20) },
  itemscontainer: { flexDirection: 'row', alignItems: 'center', gap: s(4) },
  cityname: { fontFamily: 'Outfit-Medium', fontSize:s(16) },
  cartcontainer:{
    backgroundColor: '#eeee',
    paddingVertical: s(10),
    paddingHorizontal: s(10),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:s(15)
    
  },
  cartimage:{height: vs(20), width: s(20) }
});
