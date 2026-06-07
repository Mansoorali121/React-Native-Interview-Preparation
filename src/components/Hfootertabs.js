import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Hfootertabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hearticon}>
        <Image
          source={require('../assets/burger/heart.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.roatedimage}>
        <Image
          source={require('../assets/burger/roasted.png')}
          style={styles.image2}
        />
      </View>
      <View style={styles.chickentext}>
        <Text style={{textAlign:"center",fontFamily:"Outfit-Medium", fontSize:s(16)}}>Roasted Chicken</Text>
      </View>
      <View  style={styles.timecontainer}>
        <Text style={styles.text}>20min</Text>
        <Text style={styles.text}>⭐4.5</Text>
      </View>
    </View>
  );
};

export default Hfootertabs;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(25),
    marginHorizontal: s(20),
    backgroundColor: '#eee',
    height: vs(220),
    width: s(160),
    borderRadius: s(15),
  },
  hearticon: { left: s(130), top: vs(10) },
  image: { height: vs(17), width: s(17) },
  image2: { height: vs(140), width: s(140) },
  roatedimage: { marginTop: s(-20) },
  chickentext:{marginHorizontal:s(20)},
  timecontainer:{flexDirection:"row",marginHorizontal:s(20) , justifyContent:"space-between"},
  text:{fontSize:s(13),fontFamily:"Outfit-Regular"},
});
