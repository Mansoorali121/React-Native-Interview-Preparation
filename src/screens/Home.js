import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';

const Home = () => {
  const Tempdata = [
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL:
        'https://m.media-amazon.com/images/I/51Z0nLAfLmL._SX322_BO1,204,203,200_.jpg',
      cavegoryColor: 'red',
    },
  ];
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
