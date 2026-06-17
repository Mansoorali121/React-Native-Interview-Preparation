import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Cfootercard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemcontainer}>
        <Image source={require('../assets/man.png')} style={styles.Image} />
      </View>
      <View style={{ marginStart: s(25) }}>
        <Text style={styles.name}>Alice Johson</Text>
        <Text style={styles.subtext}>Delievery Man</Text>
      </View>
      <View style={[styles.itemcontainer, { marginStart: s(60) }]}>
        <Image
          source={require('../assets/message.png')}
          style={styles.Image2}
        />
      </View>

      <View style={styles.itemcontainer}>
        <Image
          source={require('../assets/telephone.png')}
          style={styles.Image2}
        />
      </View>
    </View>
  );
};

export default Cfootercard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: s(10),
    height: vs(60),
    borderRadius: s(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  Image: { height: vs(30), width: s(30) },
  itemcontainer: {
    marginStart: s(10),
    backgroundColor: '#eee',
    paddingHorizontal: vs(3),
    paddingVertical: s(3),
    borderRadius: s(20),
  },
  name: { fontFamily: 'Outfit-Regular', fontWeight: 'bold' },
  subtext: { fontFamily: 'Outfit-Regular', color: 'gray', fontSize: s(12) },
  Image2: { height: vs(20), width: s(20) },
});
