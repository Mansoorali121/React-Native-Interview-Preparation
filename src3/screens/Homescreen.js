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

      <View style={styles.tabcontainer}>
        <Text style={styles.tabtext}>Burger King</Text>
        <Text style={styles.tabtext}>20 min</Text>
        <Text style={styles.tabtext}>4.5 km</Text>
      </View>
      {/* Items Quantity */}
      <View style={styles.itemquantity}>
        <Text>Energy</Text>
        <Text>Carbs</Text>
        <Text>Fats</Text>
        <Text>Protein</Text>
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
    right: s(-270),
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
  rating: { fontFamily: 'Outfit-Medium', fontSize: s(14) },
  review: { fontFamily: 'Outfit-Medium', fontSize: s(14), marginStart: s(20) },
  tabcontainer: {
    marginHorizontal: s(20),
    flexDirection: 'row',
    gap: s(20),
    marginTop: vs(20),
  },
  tabtext: { fontFamily: 'Outfit-Regular', fontSize: s(14) },
  itemquantity: {
    marginTop: vs(10),
    marginHorizontal: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
