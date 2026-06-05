import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Hheader = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.location}>
          <Image
            source={require('../assets/burger/maps.png')}
            style={styles.image}
          />
          <Text style={styles.cityname}>Habiganj City</Text>
        </View>
        <TouchableOpacity style={styles.menubtn}>
          <Image
            source={require('../assets/burger/sort.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hheader;

const styles = StyleSheet.create({
  container: { marginTop: s(20), marginHorizontal: s(20) },
  image: { height: vs(25), width: s(25) },
  menubtn: {
    backgroundColor: '#eee',
    height: vs(40),
    width: s(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(20),
  },
  location: { flexDirection: 'row', alignItems: 'center', gap: s(5) },
  cityname: { fontSize: s(15), fontWeight: 'bold', fontFamily: 'Outfit-Light' },
});
