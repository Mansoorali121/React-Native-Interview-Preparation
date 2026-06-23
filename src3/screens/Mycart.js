import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Hheader from '../components/Hheader';
import { s, vs } from 'react-native-size-matters';

const Mycart = () => {
  return (
    <View  >
      <Hheader title="My Cart" />
      <View style={styles.card}>
        <Image
          source={require('../assets/Burgerrr.jpg')}
          style={styles.image}
        />
        <View style={styles.deletecontainer}>
          <Text style={styles.title}>Chicken Burger</Text>
          <Image
            source={require('../assets/delete.png')}
            style={styles.deleteimage}
          />
        </View>
     
      </View>
        
    </View>
  );
};

export default Mycart;

const styles = StyleSheet.create({
  image: { height: vs(120), width: s(120), borderRadius: s(10) },
  card: {
    backgroundColor: 'red',
    marginHorizontal: s(20),
   
    borderRadius: s(20),
  },
  deleteimage: { height: vs(20), width: s(20), tintColor: 'blue' },
  deletecontainer: {
    flexDirection: 'row',
    marginTop: vs(10),
    marginStart: s(10),
    gap: s(50),
  },
  title: { fontSize: s(14), fontFamily: 'Outfit-Medium' },
  time:{position:"absolute"},
});
