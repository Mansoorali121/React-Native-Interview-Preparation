import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';
import Book from '../components/Book';
const Home = () => {
  const Tempdata = [
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL: 'https://loremflickr.com/2850/117?lock=1510699992919947',
      categoryColor: 'red',
    },
  ];
  return (
    <View>
      <FlatList
        data={Tempdata}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Book {...item} />}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
