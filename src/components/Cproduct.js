import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Cproduct = () => {
  return (
    <View style={styles.cont}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: s(10),
        }}
      >
        <View>
          <Image
            source={require('../assets/burger/roasted.png')}
            style={styles.image}
          />
        </View>
        <View style={{ marginTop: s(-20) }}>
          <Text>Roasted Chicken</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: s(-20), gap: s(10) }}>
          <Text>-</Text>
          <Text>02</Text>
          <Text>+</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: s(80),
          marginLeft: s(130),
          gap: s(80),
        }}
      >
        <Text>$12.00 </Text>
        <Text>$24.00 </Text>
      </View>
    </View>
  );
};

export default Cproduct;

const styles = StyleSheet.create({
  cont: {
    marginTop: vs(30),
    marginHorizontal: s(20),
    backgroundColor: '#f1f1f1',
    borderRadius: s(12),
    height: vs(110),
  },
  image: { height: vs(100), width: s(100) },
});
