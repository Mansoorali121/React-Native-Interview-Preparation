import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Hheader from '../components/Hheader';
import { s, vs } from 'react-native-size-matters';

const Homescreen = () => {
  return (
    <View>
      <Hheader title={'Menu Details'} />
      <View style={styles.imagecontainer}>
        <Image source={require('../assets/zzzz.png')} style={styles.image} />
      </View>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Chic Burger</Text>
        <Text style={styles.title}>$8.50</Text>
      </View>
      <Text style={styles.pricetext}>$9.50</Text>
      <View style={styles.ratincontainer}>
        <Image source={require('../assets/star.png')} style={styles.image2} />
        <Text style={styles.rating}> 4.8</Text>
        <Text style={styles.review}>(450 Review)</Text>
      </View>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  image: { height: vs(300), width: s(300) },
  imagecontainer: { alignItems: 'center' },
  titlecontainer: {
    flexDirection: 'row',
    marginHorizontal: s(20),
    justifyContent: 'space-between',
  },
  title: { fontSize: s(18), fontFamily: 'Outfit-Medium' },
  pricetext: {
    marginHorizontal: s(20),
    position: 'absolute',
    right: s(0),
    color: 'red',
    bottom: s(0),
    fontFamily: 'Outfit-Medium',
  },
  image2: { height: vs(20), width: s(20) },
  ratincontainer: {
    marginTop: vs(10),
    marginHorizontal: s(20),
    flexDirection: 'row',
  },
  rating:{  fontFamily: 'Outfit-Medium',fontSize:s(14)},
  review:{fontFamily: 'Outfit-Medium',fontSize:s(14),marginStart:s(20)},
});
