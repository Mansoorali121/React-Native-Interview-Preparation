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
      Alert.alert('Book deleted', 'Book has been deleted successfully');
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

  const onDeletehandler = async bookId => {
    try {
      const response = await axios.delete(
        `https://69609023e7aa517cb79661a7.mockapi.io/Books/${bookId}`,
      );
      setData(response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around', gap: 10 }}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Book
            author={item.author}
            nameOfBook={item.nameOfBook}
            coverURL={item.coverURL}
            onDeletepress={() => onDeletehandler(item.id)}
          />
        )}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({});
