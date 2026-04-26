import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  //   Temperory Add without SQLIte
  const addUser = () => {
    if (name.trim() === '') {
      return;
    }
    const newUser = {
      id: Date.now().toString(),
      name: name,
    };
    setList([...list, newUser]);
    setName('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SqLite App Step 1</Text>
      <TextInput
        placeholder="Enter Name: "
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={addUser}
      >
        <Text style={styles.btntext}>Add</Text>
      </TouchableOpacity>
      {/* <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 12,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: 'blue',
    padding: 12,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
  },
  btntext: { color: 'white', fontWeight: 'bold' },
});
