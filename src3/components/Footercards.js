import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Footercards = () => {
  return (
    <View style={styles.cont}>
      <Image source={require('../assets/pizza.png')} style={styles.image} />
      <Text style={styles.smokyburger}>Smoky Blaze Burger</Text>
      <Text style={styles.review}>★ 4.8 (205 Review)</Text>
      <View>
        
      </View>
    </View>
  );
};

export default Footercards;

const styles = StyleSheet.create({
  cont: { marginHorizontal: s(10) },
  image: { height: vs(150), width: s(150), borderRadius: s(20) },
  smokyburger: { fontSize: s(16), fontFamily: 'Outfit-Regular' },
  review: { fontSize: s(13), fontFamily: 'Outfit-Regular' },
});
