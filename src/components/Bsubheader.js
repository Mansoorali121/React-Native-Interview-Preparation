import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Bsubheader = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/burger/star.png')}
            style={styles.image}
          />
          <Text style={styles.text}>4.5 </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/burger/fire.png')}
            style={styles.image}
          />
          <Text style={styles.text}>100 kcal </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/burger/chronometer.png')}
            style={styles.image}
          />
          <Text style={styles.text}>5-10 Min </Text>
        </View>
      </View>
    </View>
  );
};

export default Bsubheader;

const styles = StyleSheet.create({
  container: {
    marginTop: s(15),
    marginHorizontal: s(20),
  },
  image: { height: vs(20), width: s(20) },
  text: { fontWeight: 'bold', marginStart: s(10) },
});
