import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Categorytab = () => {
  const tabs = ['Burger', 'Pizza', 'Meat'];
  return (
    <View style={styles.itemcontainer}>
      {tabs.map(item => {
        return (
          <View
            style={[
              styles.cont,
              item != 'Burger' && { backgroundColor: '#eee' },
            ]}
          >
            <View style={styles.imagecontainer}>
              <Image 
                source={require('../assets/burger.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.burgertext}>
              <Text style={styles.itemname}> {item}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Categorytab;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(15),
    marginHorizontal: s(15),
    backgroundColor: '#c7e0ae',
    paddingVertical: vs(2),
    width: s(150),
    borderRadius: s(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: { height: vs(30), width: s(30) },
  burgertext: { marginHorizontal: s(20) },
  imagecontainer: {
    backgroundColor: '#fff',
    marginHorizontal: s(4),

    borderRadius: s(20),
    height: vs(60),
    width: s(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemcontainer: { marginTop: vs(20), flexDirection: 'row' },
  itemname:{fontSize:s(14),fontFamily:"Outfit-Regular"
  },
});
