import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { vs, s } from 'react-native-size-matters';

const HsearchButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemscontainer}>
        <View style={styles.searchbtn}>
          <Image
            source={require('../assets/search.png')}
            style={styles.image}
          />
          <TextInput placeholder="Search Your favourite food" />
        </View>
        <Image source={require('../assets/setting.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default HsearchButton;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(20),
    marginHorizontal: s(20),
    backgroundColor: '#F0F0F0',
    paddingVertical: vs(12),
    paddingHorizontal: s(12),
    borderRadius: s(40),
  },
  image: { height: vs(25), width: s(25) },
  searchbtn: { flexDirection: 'row', alignItems: 'center' },
  itemscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
