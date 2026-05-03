import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import Book from '../components/Book';
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState([]);
 

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
  // Delete Book
  const onDeletehandler = () => {
    
  }
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around', gap: 10 }}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Book author={item.author} nameOfBook={item.nameOfBook}  coverURL={item.coverURL}
          onDeletepress={onDeletehandler}
          />
        )}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
