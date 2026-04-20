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
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
//   const [message, setMessage] = useState('');

//   // Add Task Function
//   const addTask = () => {
//     const value = task.trim();

//     if (value === '') {
//       setMessage('Please enter task ❌');
//       return;
//     }

//     const newTask = {
//       id: Date.now().toString(),
//       text: value,
//     };

//     setTasks([...tasks, newTask]); // 👈 add to list
//     setTask(''); // clear input
//     setMessage('');
//   };
//   const deleteTask = (id: string) => {
//    const dleeted = tasks.filter((item)=> item.id !== id);
//    setTasks(dleeted);
//    setMessage("");
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>To do List App </Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter task"
//         value={task}
//         onChangeText={setTask}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         activeOpacity={0.6}
//         onPress={addTask}
//       >
//         <Text style={styles.btntitle}>Add Task</Text>
//       </TouchableOpacity>
//       {message !== ' ' && <Text style={styles.error}>{message}</Text>}
//       <FlatList
//         data={tasks}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.itemText}>{item.text}</Text>
//             <Text style={styles.itemText}>{item.id}</Text>

//             <TouchableOpacity style={styles.delete} onPress={() => deleteTask(item.id)}>
//               <Text style={styles.dleetetext}>Delete Task </Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', gap: 20 },
//   title: { fontSize: 26, fontWeight: 'bold', marginTop: 20 },
//   input: {
//     borderWidth: 1,
//     marginTop: 20,
//     padding: 10,
//     width: '80%',
//     borderRadius: 5,
//   },
//   button: {
//     width: '40%',
//     backgroundColor: 'red',
//     padding: 14,
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   btntitle: { color: '#fff', fontWeight: 'semibold' },
//   error: { color: 'red', marginTop: 50, fontSize: 22 },
//   count: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   item: {
//     padding: 12,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   itemText: {
//     fontSize: 16,
//   },
//   delete: {
//     backgroundColor: 'blue',
//     padding: 5,
//     width: '40%',
//     alignItems: 'center',
//     borderRadius: 6,
//   },
//   dleetetext: { color: '#fff', fontWeight: 'bold' },
// });

import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');

  // Static Data
  const data = [
    { id: 1, name: 'Mansoor' },
    { id: 2, name: 'Ali' },
    { id: 3, name: 'Ahmed' },
    { id: 4, name: 'Asad' },
    { id: 5, name: 'Hassan' },
  ];

  return (
    <View>
      <Text>Search Filter App </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
