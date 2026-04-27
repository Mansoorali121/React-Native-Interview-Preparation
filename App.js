// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const [list, setList] = useState([]);

//   //   Temperory Add without SQLIte
//   const addUser = () => {
//     if (name.trim() === '') {
//       return;
//     }
//     const newUser = {
//       id: Date.now().toString(),
//       name: name,
//     };
//     setList([...list, newUser]);
//     setName('');
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>SqLite App Step 1</Text>
//       <TextInput
//         placeholder="Enter Name: "
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
//       <TouchableOpacity
//         style={styles.btn}
//         activeOpacity={0.6}
//         onPress={addUser}
//       >
//         <Text style={styles.btntext}>Add</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={list}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => {
//           return (
//             <View>
//               <Text style={styles.item}>{item.name}</Text>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 20,
//     marginHorizontal: 10,
//   },
//   title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     width: '80%',
//     padding: 12,
//     borderRadius: 10,
//   },
//   btn: {
//     backgroundColor: 'blue',
//     padding: 12,
//     width: '80%',
//     alignItems: 'center',
//     marginTop: 20,
//     borderRadius: 12,
//   },
//   btntext: { color: 'white', fontWeight: 'bold' },
//     item: {
//     fontSize: 18,
//     marginTop: 10,
    
//   },
// });




import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import SQLite from "react-native-sqlite-storage";

// 🔹 Open Database
const db = SQLite.openDatabase(
  { name: "TestDB.db", location: "default" },
  () => console.log("Database opened"),
  error => console.log("Error:", error)
);

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  // 🔹 Create Table (IMPORTANT 🔥)
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);",
        [],
        () => console.log("Table created"),
        error => console.log("Error creating table", error)
      );
    });
  }, []);

  // 🔹 Temporary Add (still local state)
  const addUser = () => {
    if (name.trim() === "") return;

    const newUser = {
      id: Date.now().toString(),
      name: name,
    };

    setList([...list, newUser]);
    setName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SQLite App (Step 2)</Text>

      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={addUser}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff" },
  item: {
    fontSize: 18,
    marginTop: 15,
  },
});