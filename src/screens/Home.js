import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import Book from '../components/Book';
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState([]);
  const Tempdata = [
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjZoCvw3Ry2Xcl2C2Dot728vyEx1idSxCvlwCO5t3_w&s&ec=121657078',
      categoryColor: 'red',
    },
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjZoCvw3Ry2Xcl2C2Dot728vyEx1idSxCvlwCO5t3_w&s&ec=121657078',
      categoryColor: 'red',
    },
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL: 'https://.com/2850/117?lock=1510699992919947',
      categoryColor: 'red',
    },
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL: 'https://loremflickr.com/2850/117?lock=1510699992919947',
      categoryColor: 'red',
    },
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL: 'https://loremflickr.com/2850/117?lock=1510699992919947',
      categoryColor: 'red',
    },
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjZoCvw3Ry2Xcl2C2Dot728vyEx1idSxCvlwCO5t3_w&s&ec=121657078',
      categoryColor: 'red',
    },
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL: 'https://loremflickr.com/2850/117?lock=1510699992919947',
      categoryColor: 'red',
    },
    {
      author: 'Vilson',
      nameOfBook: 'The Alchemist',
      price: 10,
      coverURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjZoCvw3Ry2Xcl2C2Dot728vyEx1idSxCvlwCO5t3_w&s&ec=121657078',
      categoryColor: 'red',
    },
  ];

  //  Get List of Books from API
  const getListofBooks = async () => {
    try {
      const response = await axios.get(
        '  https://69609023e7aa517cb79661a7.mockapi.io/Books',
      );
      setData(response.data);
      Alert.alert('Books Fetched', 'Books have been fetched successfully');
    } catch (error) {
      console.log('Error', error);
    }
  };
  useEffect(() => {
    getListofBooks();
  }, []);
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around', gap: 10 }}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Book author={item.author} nameOfBook={item.nameOfBook} />
        )}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
