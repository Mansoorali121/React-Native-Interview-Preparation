import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Admin checker Button
  const checkAdmin = () => {
    if (name.trim() === '') {
      setMessage('Please enter name ');
    } else if (name === 'Admin' || name === 'admin') {
      setMessage('Welcome Admin');
    } else {
      setMessage('You are not Admin');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Check Mobile App </Text>
      <Text style={styles.inputtitle}>Enter Your Name Here: </Text>
      <TextInput placeholder="Name" style={styles.input}value={name} onChangeText={(text)=>setName(text)} />
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={checkAdmin}
        >
          <Text style={styles.btntext}>Check </Text>
        </TouchableOpacity>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: { marginTop: 50, marginHorizontal: 20 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputtitle: { fontSize: 15 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    width: '50%',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  btntext: { color: 'white', fontWeight: 'bold' },
  message: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: 'red',
    marginTop: 20,
  },
});
