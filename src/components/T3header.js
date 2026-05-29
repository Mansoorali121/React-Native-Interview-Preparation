import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { vs, s } from 'react-native-size-matters';

const T3header = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.headercontainer}>
        <TouchableOpacity style={styles.imagecircle}>
          <Image source={require('../assets/left.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imagecircle}>
          <Image
            source={require('../assets/search.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default T3header;

const styles = StyleSheet.create({
  cont: { marginTop: vs(20) },
  image: { height: vs(28), width: s(28), fontFamily: 'Outfit-Black' },
  headercontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  imagecircle: { padding: s(10), backgroundColor: "#f6fbff50", borderRadius: s(14) },
});
