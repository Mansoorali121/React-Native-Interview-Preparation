import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Footerlist = () => {
  return (
    <View style={styles.cont}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.circle}></View>
        <View>
          <Text style={styles.newtext}>Design New Home Screen </Text>
          <Text style={styles.uitext}>Create UI for the new dashboard</Text>
          <Text style={styles.protext}>In Progress</Text>
        </View>
        <View style={styles.date}>
          <Image
            style={styles.image}
            source={require('../assets/calendar.png')}
          />
          <Text style={styles.datetext}>20 May </Text>
        </View>
      </View>
    </View>
  );
};

export default Footerlist;

const styles = StyleSheet.create({
  cont: { height: vs(90), width: '100%', top: vs(10) , backgroundColor:"#e4e7ea", borderRadius:s(10),marginBottom:s(5)},
  circle: {
    borderWidth: 2,
    borderColor: 'blue',
    width: vs(20),
    height: vs(20),
    borderRadius: vs(10),
    marginTop: vs(10),
    marginHorizontal: s(14),
  },
  newtext: { fontSize: s(12), marginTop: vs(5), fontFamily: 'Outfit-Black' },
  uitext: { fontSize: s(10), fontFamily: 'Outfit-Medium' },
  protext: {
    fontSize: s(13),
    color: 'blue',
    fontFamily: 'Outfit-Light',
    marginStart: s(20),
    top: vs(5),
    backgroundColor: 'lightblue',
    width: s(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(10),
    padding: s(2),
  },
  date: {
    position: 'absolute',
    right: 0,
    top: vs(10),
    padding: s(5),
    borderRadius: s(10),
    flexDirection: 'row',
    gap: s(5),
  },
  image: { height: vs(15), width: s(15), marginBottom: vs(-5) },
  datetext: { fontSizes: s(10), fontFamily: 'Outfit-Light' },
});
