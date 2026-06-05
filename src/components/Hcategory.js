import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Hcategory = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: s(3) }}>
        <Text style={styles.findtext}>Find</Text>
        <Text style={styles.text}>5Km</Text>
        <Image
          source={require('../assets/burger/next.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Hcategory;

const styles = StyleSheet.create({
  container: { marginTop: vs(40), marginHorizontal: s(20) },
  findtext: {
    fontSize: s(26),
    fontWeight: 'bold',
    fontFamily: 'Outfit-ExtraLight',
  },
  image: { height: vs(20), width: s(20),marginTop:s
    (5), tintColor:"#FF7A45"
   },
  text:{fontSize:s(16),
    fontWeight:"bold",
    marginTop:s(5),
    color:"#FF7A45"
  },
});
