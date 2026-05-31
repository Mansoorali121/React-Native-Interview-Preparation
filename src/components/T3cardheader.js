import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const T3cardheader = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.headertitle}>Tasks</Text>
      <Image
        source={require('../assets/horizontal.png')}
        style={styles.image}
      />
    </View>
  );
};

export default T3cardheader;

const styles = StyleSheet.create({
  cont: {
    marginTop: s(15),
    marginHorizontal: s(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headertitle: {
    fontSize: s(15),
    fontWeight: 'bold',
    fontFamily: 'Outfit-Regular',
  },
  image: { height: vs(20), width: s(20) },
});
