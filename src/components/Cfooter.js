import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Cfooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemscontainer}>
        <Text style={styles.total}>Subtotal</Text>
        <Text style={styles.price}>$70/00</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Cfooter;

const styles = StyleSheet.create({
  container: { marginTop: vs(20), marginHorizontal: s(20) },
  itemscontainer: { flexDirection: 'row', justifyContent: 'space-between' },
  total: { fontFamily: 'Outfit-Medium', fontSize: s(15) },
  price: { fontFamily: 'Outfit-Medium', fontSize: s(12), color: 'gray' },
  line: { borderWidth: s(0.3), color: '#eee' },
});
