import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Searchbutton = () => {
  return (
    <View style={styles.cont}>
     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
       <View style={styles.itemcontainer}>
        <Image source={require('../assets/search.png')} style={styles.image} />
        <TextInput placeholder="Search" />
      </View>
      <View style={styles.filterbutton}>
        <Image source={require('../assets/filter.png')} style={styles.image2} />
      </View>
     </View>
    </View>
  );
};

export default Searchbutton;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    backgroundColor: '#eeee',
    paddingVertical: vs(2),
    borderRadius: s(35),
  },
  image: { height: vs(25), width: s(25), marginStart: s(10) },
  itemcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: s(140),
    paddingVertical: vs(12),
    borderRadius: s(30),
    marginStart: s(5),
  },
  image2: { height: vs(25), width: s(25) },
  filterbutton: {
    backgroundColor: '#fff',
    width: s(60),
    paddingVertical: vs(12),
    borderRadius: s(30),
    marginStart: s(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:s(6)
  },
});
