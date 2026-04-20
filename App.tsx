// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   // Admin checker Button
//   const checkAdmin = () => {
//     if (name.trim() === '') {
//       setMessage('Please enter name ');
//     } else if (name === 'Admin' || name === 'admin') {
//       setMessage('Welcome Admin');
//     } else {
//       setMessage('You are not Admin');
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Admin Check Mobile App </Text>
//       <Text style={styles.inputtitle}>Enter Your Name Here: </Text>
//       <TextInput placeholder="Name" style={styles.input}value={name} onChangeText={(text)=>setName(text)} />
//       <View style={{ alignItems: 'center' }}>
//         <TouchableOpacity
//           style={styles.button}
//           activeOpacity={0.5}
//           onPress={checkAdmin}
//         >
//           <Text style={styles.btntext}>Check </Text>
//         </TouchableOpacity>
//         <Text style={styles.message}>{message}</Text>
//       </View>
//     </View>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   container: { marginTop: 50, marginHorizontal: 20 },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 40,
//     textAlign: 'center',
//   },
//   inputtitle: { fontSize: 15 },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginTop: 20,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   button: {
//     width: '50%',
//     backgroundColor: 'blue',
//     padding: 10,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   btntext: { color: 'white', fontWeight: 'bold' },
//   message: {
//     fontSize: 20,
//     fontWeight: 'semibold',
//     color: 'red',
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
//   const [age, setAge] = useState('');
//   const [message, setMessage] = useState('');

//   const checkAge = () => {
//     if (age.trim() === '') {
//       setMessage('Please enter age ❌');
//       return;
//     }

//     const numAge = Number(age);

//     if (isNaN(numAge)) {
//       setMessage('Invalid age ❌');
//     } else if (numAge >= 18) {
//       setMessage('You can vote ✅');
//     } else {
//       setMessage('You are underage ❌');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Voting Eligibility App</Text>

//       <TextInput
//         placeholder="Enter your age"
//         style={styles.input}
//         keyboardType="numeric"
//         value={age}
//         onChangeText={setAge}
//       />

//       <TouchableOpacity style={styles.button} onPress={checkAge}>
//         <Text style={styles.btnText}>Check Age</Text>
//       </TouchableOpacity>

//       <Text style={styles.message}>{message}</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 10,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   btnText: { color: '#fff', fontWeight: 'bold' },
//   message: { marginTop: 20, fontSize: 18 },
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
//   const [message, setMessage] = useState('');
//   // Email Validation Function

//   const validateEmail = () => {
//     const trimedEmail = email.trim();

//     if (trimedEmail === '') {
//       setMessage('Please enter email');
//     } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimedEmail)) {
//       setMessage('Valid Email');
//     } else {
//       setMessage('Invalid Email');
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Email Validation App </Text>
//       <View style={styles.formcontainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TouchableOpacity style={styles.button} onPress={validateEmail}>
//           <Text style={styles.btntext}>Check Email </Text>
//         </TouchableOpacity>
//         <Text style={styles.message}>{message}</Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', marginTop: 20 },
//   title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
//   formcontainer: { marginTop: 20, gap: 20 },
//   input: { borderWidth: 1, padding: 10, width: 230, borderRadius: 5 },
//   button: {
//     backgroundColor: 'green',
//     padding: 15,
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   btntext: { color: '#fff', fontWeight: 'bold' },
//   message:{fontSize:20,color:"red"},
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
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   // Password Strenght Checker Function
//   const Checkpassword = () => {
//     const pass = password.trim();
//     if (pass === '') {
//       setMessage('Please enter password');
//     } else if (pass.length < 6) {
//       setMessage('Weak password');
//     } else if (pass.length < 10) {
//       setMessage('Moderate password');
//     } else {
//       setMessage('Strong password');
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Password Strengthen Mobile App </Text>
//       <TextInput
//         placeholder="Password"
//         secureTextEntry={true}
//         style={styles.input}
//         value={password}
//         onChangeText={setPassword}
//       />
//       <View style={styles.btncontainer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={Checkpassword}
//           activeOpacity={0.6}
//         >
//           <Text style={styles.btnText}>Check Strength</Text>
//         </TouchableOpacity>
//         <Text style={styles.message}>{message}</Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', marginTop: 30 },
//   title: {
//     fontSize: 20,
//     fontWeight: 'semibold',
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: 10,
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginTop: 40,
//     width: 300,
//     borderRadius: 10,
//   },
//   button: {
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 8,
//     backgroundColor: 'salmon',
//   },
//   btnText: { color: '#fff', fontWeight: 'semibold' },
//   btncontainer: { alignItems: 'center', marginTop: 30 },
//   message: { fontSize: 20, color: 'red', marginTop: 20 },
// });

// import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
// import React, { useState } from 'react';

// const App = () => {
//   const [number, setNumber] = useState('');
//   const [message, setMessage] = useState('');

//   // Even odd number checker function

//   const evenOdd = () => {
//     const value = number.trim();

//     if (value === '') {
//       setMessage('Enter a number');
//       return;
//     }
//     const num = Number(value);
//     if (isNaN(num)) {
//       setMessage('Invalid Number');
//     } else if (num % 2 == 0) {
//       setMessage('Even Number');
//     } else {
//       setMessage('Odd Number');
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Even Odd Number Chekcer Programm </Text>
//       <TextInput
//         value={number}
//         placeholder="Enter number"
//         onChangeText={setNumber}
//         style={styles.input}
//       />
//       <Pressable style={styles.button} onPress={evenOdd}>
//         <Text style={styles.btntext}>Check </Text>
//       </Pressable>
//       <Text style={styles.message}>{message}</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, marginTop: 20, marginHorizontal: 10 },
//   title: { fontSize: 20, fontWeight: 'semibold' },
//   button: {
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     borderRadius: 10,
//     width: '50%',
//     marginTop: 20,
//   },
//   btntext: { color: '#fff' },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginTop: 40,
//     width: 300,
//     borderRadius: 10,
//   },
//   message: { fontSize: 20, color: 'red', marginTop: 20 },
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
//   const [text, setText] = useState('');
//   const [result, setResult] = useState('');

//   // Reverse String Function
//   const reverseString = () => {
//     const value = text.trim();
//     if (value === '') {
//       setResult('Please enter an string');
//       return;
//     }
//     const reversed = value.split('').reverse().join('');
//     setResult(reversed);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Reverse String App</Text>
//       <View style={{ marginTop: 20, gap: 20 }}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter name"
//           value={text}
//           onChangeText={setText}
//         />
//         <TouchableOpacity
//           style={styles.button}
//           activeOpacity={0.8}
//           onPress={reverseString}
//         >
//           <Text style={styles.btnText}>Reverse</Text>
//         </TouchableOpacity>
//         <Text style={styles.result}>{result}</Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', marginTop: 20 },
//   title: { fontSize: 20, fontWeight: 'semibold' },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginTop: 40,
//     width: 300,
//     borderRadius: 10,
//   },
//   button: {
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 8,
//     backgroundColor: 'salmon',
//   },
//   btnText: { color: '#fff', fontWeight: 'semibold', textAlign: 'center' },
//   result: { fontSize: 20, color: 'red', marginTop: 20 },
// });

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
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [message, setMessage] = useState('');

  // Add Task Function
  const addTask = () => {
    const value = task.trim();

    if (value === '') {
      setMessage('Please enter task ❌');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      text: value,
    };

    setTasks([...tasks, newTask]); // 👈 add to list
    setTask(''); // clear input
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do List App </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={addTask}
      >
        <Text style={styles.btntitle}>Add Task</Text>
      </TouchableOpacity>
      {message !== ' ' && <Text style={styles.error}>{message}</Text>}
       <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', gap: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginTop: 20 },
  input: {
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    width: '40%',
    backgroundColor: 'red',
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  btntitle: { color: '#fff', fontWeight: 'semibold' },
  error: { color: 'red', marginTop: 50, fontSize: 22 },
  count: {
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
});
