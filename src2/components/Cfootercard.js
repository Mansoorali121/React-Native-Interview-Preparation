import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Cfootercard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/man.png')} style={styles.Image} />
      </View>

      <View>
        <Text>Alice Johson</Text>
        <Text>Delievery Man</Text>
      </View>

    </View>
  );
};

export default Cfootercard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: s(10),
    height: vs(60),
    borderRadius: s(20),
    flexDirection:"row",
    alignItems:"center",
    
  },
  Image: { height: vs(30), width: s(30) },
});
