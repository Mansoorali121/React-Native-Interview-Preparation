import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Book = ({ author, nameOfBook, price, coverURL, categoryColor }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.coloredSquare, { backgroundColor: 'red' }]}>
        <Image source={{ uri: coverURL }} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.delete}>Delete </Text>
      </TouchableOpacity>
      <Text>{author}</Text>
      <Text>{nameOfBook}</Text>
      <Text>{price}$</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
  coloredSquare: {
    borderRadius: 8,
    height: 130,
    width: 130,
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 130,
    width: 80,
    resizeMode: 'stretch',
    backgroundColor: 'blue',
    marginTop: -20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  delete: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});
