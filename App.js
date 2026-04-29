import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const[data, setData] = useState([]);
  // Third Party API
  const getBooks = async () => {
    try {
      const response = await axios.get(
        'https://69609023e7aa517cb79661a7.mockapi.io/Books',
      );
      const result = response.data;
      setData(result);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third party APIS </Text>
      <Text>
        Get Request to Fetch Data {'\n '}Get request is used to load data and
        fetch it on screen{' '}
      </Text>

      <View style={styles.butoncontainer}></View>
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
  butoncontainer: {},
});
