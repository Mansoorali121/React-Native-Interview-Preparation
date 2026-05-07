import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const subheader = () => {
  return (
    <View style={styles.cont}>
      <View>
        <Text style={styles.name}>Hello, Aman</Text>
        <Text style={styles.morning}>Good Morning!</Text>
        <Text style={styles.work}>Let's get some work done today.</Text>
      </View>
      <View style={styles.profile}>
        <Image source={require('../assets/profile.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default subheader;

const styles = StyleSheet.create({
  cont: {
    marginTop: s(28),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  morning: { fontSize: s(20), fontFamily: 'Outfit-Bold' },
  work: { fontFamily: 'Outfit-ExtraLight' },
  name: { fontSize: s(15) },
  image: { height: s(45), width: s(45) },
  profile: { marginTop: s(22) },
});
