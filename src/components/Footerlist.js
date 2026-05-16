import { StyleSheet, Text, View } from 'react-native';
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
      </View>
    </View>
  );
};

export default Footerlist;

const styles = StyleSheet.create({
  cont: {  height: vs(100), width: '100%' ,top:vs(10)},
  circle: {
    borderWidth: 2,
    borderColor: 'blue',
    width: vs(20),
    height: vs(20),
    borderRadius: vs(10),
    marginTop: vs(10),
    marginHorizontal: s(20),
  },
  newtext: { fontSize: s(12), marginTop: vs(5), fontFamily: 'Outfit-Black' },
  uitext: { fontSize: s(10), fontFamily: 'Outfit-Medium' },
  protext: {
    fontSize: s(13),
    color: 'blue',
    fontFamily: 'Outfit-Light',
    marginStart: s(20),
    top: vs(5),
    backgroundColor:"lightblue",
    width:s(70),
    alignItems:"center",
    justifyContent:"center",
    borderRadius:s(10),
    padding:s(2)
  },
});
