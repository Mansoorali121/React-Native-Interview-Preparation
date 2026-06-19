import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Cfootercard from './Cfootercard';

const Tfootercard = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.burgertitle}>Burger Bang</Text>
      <View style={styles.headercontainer}>
        <Text style={styles.description}>Taste the Burger Bang, Pure Joy</Text>
        <View style={styles.circle}>
          <Image source={require('../assets/heart.png')} style={styles.image} />
        </View>
      </View>
      <Text style={styles.price}>$8.20</Text>
      {/* List values */}
      <View style={styles.listcontainer}>
        <View style={styles.item1}>
          <Image source={require('../assets/star.png')} style={styles.image} />
          <Text style={styles.value}>4.6</Text>
        </View>
        <View style={styles.item1}>
          <Image source={require('../assets/clock.png')} style={styles.image} />
          <Text style={styles.value}>20-25 min</Text>
        </View>
        <View style={styles.item1}>
          <Image source={require('../assets/fire.png')} style={styles.image} />
          <Text style={styles.value}>110 Kcal</Text>
        </View>
      </View>
      {/* Footer Card Values */}
      <View style={styles.footeritem}>
        <Cfootercard />
      </View>
      <View style={styles.footertext}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.info}>
          Burger bang delievers mouthwatering,freshly grilled burgers packed
          with flavor. Enjoy juicy patties, fresh toppings, and signature
          sacues, all made to satisfy your cravings and bring you the ultimate
          burger experince.
        </Text>
      </View>
    </View>
  );
};

export default Tfootercard;

const styles = StyleSheet.create({
  cont: { marginTop: vs(20), marginHorizontal: s(20) },
  burgertitle: { fontSize: s(20), fontFamily: 'Outfit-SemiBold' },
  image: { height: vs(20), width: s(20), resizeMode: 'contain' },
  headercontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  circle: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: s(0.5),
    paddingHorizontal: s(10),
    paddingVertical: s(10),
    borderRadius: s(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(-20),
  },
  description: { color: 'gray', fontFamily: 'Outfit-Thin' },
  price: { fontSize: s(20), fontFamily: 'Outfit-Regular' },
  item1: {
    marginTop: vs(15),
    flexDirection: 'row',
    gap: s(10),
    alignItems: 'center',
  },
  value: { fontSize: s(14), fontFamily: 'Outfit-Regular' },
  listcontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  footeritem: {
    marginTop: vs(20),
    borderWidth: s(0.3),
    borderColor: 'gray',
    borderRadius: s(10),
  },
  footertext: { marginTop: vs(10) },
  title:{fontSize: s(20), fontFamily: 'Outfit-Regular' },
  info:{color: '#6e5d5d', fontFamily: 'Outfit-Thin',fontSize:s(14)},
});
