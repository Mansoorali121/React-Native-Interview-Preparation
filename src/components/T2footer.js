import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import colors from '../style/colors';

const T2footer = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.footertitle}>Process</Text>
      <View style={styles.card}>
        <View style={styles.container}>
          <Image source={require('../assets/notes.png')} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default T2footer;

const styles = StyleSheet.create({
  cont: { marginTop: s(10) },
  footertitle: { fontSize: s(15), fontFamily: 'Outfit-Bold' },
  card: {
    backgroundColor: colors.tagSelectedBg,
    height: vs(115),
    borderRadius: s(30),
    marginHorizontal: s(10),
    padding: s(10),
  },
  image: { height: vs(24), width: s(24), tintColor: '#fff' },
  container: {
    height: vs(32),
    width: s(32),
    backgroundColor: colors.blueCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(10),
  },
});
