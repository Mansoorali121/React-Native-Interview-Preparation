import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const URL = 'https://69609023e7aa517cb79661a7.mockapi.io/Books';
  // Third Party API
  const getBooks = async () => {
    try {
      const response = await axios.get(`${URL}`);
      const result = response.data;
      console.log('Books ', response.data);
      setData(result);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  //  Hook to Manage Side Effects
  useEffect(() => {
    // Function to handle button Press
    getBooks();
  });

  //  Add Books
  const addBooks = async () => {
    try {
      const response = await axios.post(
        `${URL}`,
        {
          author: 'Mansoor',
          name_of_book: 'React Native in Sindhi',
          cover: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
        },
        Alert.alert('Book Added', 'Book has been added successfully'),
      );
      setData([...data, response.data]);
    } catch (error) {
      console.log('Error adding Books', error);
    }
  };

  //  Delete Book
  const DeleteBooks = async () => {
    try {
      const response = await axios.delete(`${URL}/11`);
      Alert.alert('Book deleted', 'Book has been deleted successfully');
      setData(data.filter(item => item.id !== 11));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  // Put request to Edit Book
  const EditBook = async () => {
    try {
      const response = await axios.put(`${URL}/11`, {
        author: 'Mansoor Sahito',
        name_of_book: 'React Native in Urdu',
        cover: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
      });
      Alert.alert('Book Edited', 'Book has been edited Successfully');
      setData(data.map(item => (item.id === 11 ? response.data : item)));
    } catch (error) {
      console.log('Error Editing Book', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third party APIS </Text>
      <Text>
        Get Request to Fetch Data {'\n '}Get request is used to load data and
        fetch it on screen{' '}
      </Text>
      <View style={{ gap: 20 }}>
        <Button title="Add Books" onPress={addBooks} />
        <Button title="Delete Books" onPress={DeleteBooks} />
        <Button title="Edit Books" onPress={EditBook} />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 25,
          color: 'red',
          marginBottom: 20,
          fontWeight: 'bold',
        }}
      >
        Put Request Now{' '}
      </Text>

      <View style={styles.butoncontainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemcontainer}>
                <Text>{item.author}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'Arial',
  },
  butoncontainer: { paddingHorizontal: 20, marginTop: 10 },
  itemcontainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});
