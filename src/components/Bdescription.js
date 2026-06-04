import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Bdescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roasted Chicken</Text>
      <Text style={styles.description}>
        Tender roasted chicken drumsticks seasoned with premium spices and
        grilled to perfection. Served with fresh herbs and lemon wedges for a
        flavorful and satisfying dining experience.{' '}
        <Text style={{ color: 'red' }}>Read more</Text>
      </Text>
    </View>
  );
};

export default Bdescription;

const styles = StyleSheet.create({
  container: { marginTop: vs(25), marginHorizontal: s(20) },
  title: { fontSize: s(18), color: '#000000', fontWeight: 'bold', },
  description: { fontSize: s(12), color: '#666', },
});
