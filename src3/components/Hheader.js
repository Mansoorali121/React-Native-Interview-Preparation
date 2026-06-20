import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Hheader = ({ title }) => {
  return (
    <View style={styles.cont}>
      <Image
        source={require('../assets/left-arrow.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Image source={require('../assets/share.png')} style={styles.image} />
    </View>
  );
};

export default Hheader;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  image: { height: vs(15), width: s(15) },
  title: { fontSize: s(20), fontFamily: 'Outfit-Regular' },
});
