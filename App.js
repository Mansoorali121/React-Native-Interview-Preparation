// // import {
// //   FlatList,
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   View,
// // } from 'react-native';
// // import React, { useState } from 'react';

// // const App = () => {
// //   const [task, setTask] = useState('');
// //   const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
// //   const [message, setMessage] = useState('');

// //   // Add Task Function
// //   const addTask = () => {
// //     const value = task.trim();

// //     if (value === '') {
// //       setMessage('Please enter task ❌');
// //       return;
// //     }

// //     const newTask = {
// //       id: Date.now().toString(),
// //       text: value,
// //     };

// //     setTasks([...tasks, newTask]); // 👈 add to list
// //     setTask(''); // clear input
// //     setMessage('');
// //   };
// //   const deleteTask = (id: string) => {
// //    const dleeted = tasks.filter((item)=> item.id !== id);
// //    setTasks(dleeted);
// //    setMessage("");
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>To do List App </Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter task"
// //         value={task}
// //         onChangeText={setTask}
// //       />
// //       <TouchableOpacity
// //         style={styles.button}
// //         activeOpacity={0.6}
// //         onPress={addTask}
// //       >
// //         <Text style={styles.btntitle}>Add Task</Text>
// //       </TouchableOpacity>
// //       {message !== ' ' && <Text style={styles.error}>{message}</Text>}
// //       <FlatList
// //         data={tasks}
// //         keyExtractor={item => item.id}
// //         renderItem={({ item }) => (
// //           <View style={styles.item}>
// //             <Text style={styles.itemText}>{item.text}</Text>
// //             <Text style={styles.itemText}>{item.id}</Text>

// //             <TouchableOpacity style={styles.delete} onPress={() => deleteTask(item.id)}>
// //               <Text style={styles.dleetetext}>Delete Task </Text>
// //             </TouchableOpacity>
// //           </View>
// //         )}
// //       />
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: { flex: 1, alignItems: 'center', gap: 20 },
// //   title: { fontSize: 26, fontWeight: 'bold', marginTop: 20 },
// //   input: {
// //     borderWidth: 1,
// //     marginTop: 20,
// //     padding: 10,
// //     width: '80%',
// //     borderRadius: 5,
// //   },
// //   button: {
// //     width: '40%',
// //     backgroundColor: 'red',
// //     padding: 14,
// //     alignItems: 'center',
// //     borderRadius: 8,
// //   },
// //   btntitle: { color: '#fff', fontWeight: 'semibold' },
// //   error: { color: 'red', marginTop: 50, fontSize: 22 },
// //   count: {
// //     fontSize: 16,
// //     marginBottom: 10,
// //   },
// //   item: {
// //     padding: 12,
// //     borderBottomWidth: 1,
// //     borderColor: '#ccc',
// //   },
// //   itemText: {
// //     fontSize: 16,
// //   },
// //   delete: {
// //     backgroundColor: 'blue',
// //     padding: 5,
// //     width: '40%',
// //     alignItems: 'center',
// //     borderRadius: 6,
// //   },
// //   dleetetext: { color: '#fff', fontWeight: 'bold' },
// // });

// // import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
// // import React, { useState } from 'react';

// // const App = () => {
// //   const [search, setSearch] = useState('');

// //   // Static Data
// //   const data = [
// //     { id: 1, name: 'Mansoor' },
// //     { id: 2, name: 'Ali' },
// //     { id: 3, name: 'Ahmed' },
// //     { id: 4, name: 'Asad' },
// //     { id: 5, name: 'Hassan' },
// //   ];

// //   // Filter Logic
// //   const filteredData = data.filter(item => {
// //     item.name.toLowerCase().includes(search.toLowerCase());
// //   });

// //  return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Search Filter App</Text>

// //       {/* 🔹 Search Input */}
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Search name..."
// //         value={search}
// //         onChangeText={setSearch}
// //       />

// //       {/* 🔹 List */}
// //       <FlatList
// //         data={filteredData}
// //         renderItem={({ item }) => (
// //           <Text style={styles.item}>{item.name}</Text>
// //         )}
// //       />
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20 },
// //   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
// //   input: {
// //     borderWidth: 1,
// //     padding: 10,
// //     borderRadius: 5,
// //     marginBottom: 20,
// //   },
// //   item: {
// //     fontSize: 18,
// //     padding: 10,
// //     borderBottomWidth: 1,
// //   },
// // });
// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// // } from "react-native";

// // const App = () => {
// //   const [count, setCount] = useState(0);
// //   const [message, setMessage] = useState("");

// //   // 🔹 Increase
// //   const increase = () => {
// //     if (count >= 10) {
// //       setMessage("Max limit reached ❌");
// //       return;
// //     }
// //     setCount(count + 1);
// //     setMessage("");
// //   };

// //   // 🔹 Decrease
// //   const decrease = () => {
// //     if (count <= 0) {
// //       setMessage("Min limit reached ❌");
// //       return;
// //     }
// //     setCount(count - 1);
// //     setMessage("");
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Counter App</Text>

// //       {/* Count Display */}
// //       <Text style={styles.count}>{count}</Text>

// //       {/* Buttons */}
// //       <View style={styles.btnContainer}>
// //         <TouchableOpacity style={styles.button} onPress={decrease}>
// //           <Text style={styles.btnText}>-</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.button} onPress={increase}>
// //           <Text style={styles.btnText}>+</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Message */}
// //       {message !== "" && <Text style={styles.message}>{message}</Text>}
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     marginBottom: 20,
// //   },
// //   count: {
// //     fontSize: 40,
// //     marginBottom: 20,
// //   },
// //   btnContainer: {
// //     flexDirection: "row",
// //     gap: 20,
// //   },
// //   button: {
// //     backgroundColor: "blue",
// //     padding: 15,
// //     borderRadius: 10,
// //   },
// //   btnText: {
// //     color: "#fff",
// //     fontSize: 20,
// //     fontWeight: "bold",
// //   },
// //   message: {
// //     marginTop: 20,
// //     color: "red",
// //     fontSize: 16,
// //   },
// // });

// import {
//   ActivityIndicator,
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   RefreshControl,
// } from 'react-native';
// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState('');

//   // API FETCH
//   const FetchData = async () => {
//     try {
//       setError('');
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/users',
//       );

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const json = await response.json();
//       setData(json);
//     } catch (err) {
//       console.log('Error:', err);
//       setError('Failed to load data');
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   // Initial Load
//   useEffect(() => {
//     FetchData();
//   }, []);

//   // Pull to Refresh
//   const onRefresh = () => {
//     setRefreshing(true);
//     FetchData();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>API Fetch App</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="blue" />
//       ) : error ? (
//         <Text style={styles.error}>{error}</Text>
//       ) : (
//         <FlatList
//           data={data}
//           showsVerticalScrollIndicator={false}
//           keyExtractor={item => item.id.toString()}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text>{item.email}</Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     paddingHorizontal: 15,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   item: {
//     padding: 15,
//     borderBottomWidth: 1,
//     marginBottom: 10,
//     borderRadius: 8,
//     backgroundColor: '#f2f2f2',
//     gap:20
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';

// const App = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   // Handle Login Logic
//   const handleLogin = () => {
//     const trimEmail = email.trim();
//     const trimPassword = password.trim();

//     if (trimEmail === '' || trimPassword === '') {
//       setMessage('All fields are required ');
//       return;
//     }
//     // Email validation
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimEmail)) {
//       setMessage('Invalid email ❌');
//       return;
//     }
//     //  Password validation
//     if (trimPassword.length < 6) {
//       setMessage('Password must be at least 6 characters ');
//       return;
//     }
//     //  Success
//     setMessage('Login Successfull');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login Form Validation App </Text>
//       <View style={styles.formcontainer}>
//         <TextInput
//           placeholder="Enter email here"
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           placeholder="Enter password"
//           style={styles.input}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           style={styles.button}
//           activeOpacity={0.6}
//           onPress={handleLogin}
//         >
//           <Text style={styles.btntext}>Login </Text>
//         </TouchableOpacity>
//         {message !== '' && <Text style={styles.message}>{message}</Text>}
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
//   title: { marginTop: 20, fontSize: 20, fontWeight: 'bold' },
//   formcontainer: { gap: 10, marginHorizontal: 20, marginTop: 20 },
//   input: { borderWidth: 1, width: 220, marginTop: 20, borderRadius: 5 },
//   button: {
//     backgroundColor: 'blue',
//     padding: 15,
//     marginTop: 20,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   btntext: { color: '#fff', fontWeight: 'bold' },
//   message: { marginTop: 20, textAlign: 'center', color: 'red', fontSize: 16 },
// });



import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");

  // 🔹 Save Data
  const saveData = async () => {
    try {
      await AsyncStorage.setItem("userName", name);
      alert("Data saved ✅");
    } catch (error) {
      console.log("Error saving data", error);
    }
  };

  // 🔹 Get Data
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("userName");
  //     if (value !== null) {
  //       setStoredName(value);
  //     }
  //   } catch (error) {
  //     console.log("Error getting data", error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AsyncStorage App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>

      {/* Get Button */}
      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={styles.btnText}>Get Data</Text>
      </TouchableOpacity>

      Show Data
      <Text style={styles.result}>
        Saved Name: {storedName}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 30 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "green",
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontWeight: "bold" },
  result: { marginTop: 20, fontSize: 18 },
});