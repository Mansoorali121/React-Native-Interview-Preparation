import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Tfootercard = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.burgertitle}>Burger Bang</Text>
      <View style={styles.headercontainer}>
        <Text>Taste the Burger Bang, Pure Joy</Text>
        <View style={styles.circle}>
          <Image source={require('../assets/heart.png')} style={styles.image} />
        </View>
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
    marginTop:s(-20)
  },
});
