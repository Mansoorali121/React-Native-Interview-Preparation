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

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Email Validation Function

  const validateEmail = () => {
    const trimedEmail = email.trim();

    if (trimedEmail === '') {
      setMessage('Please enter email');
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimedEmail)) {
      setMessage('Valid Email');
    } else {
      setMessage('Invalid Email');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Validation App </Text>
      <View style={styles.formcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={validateEmail}>
          <Text style={styles.btntext}>Check Email </Text>
        </TouchableOpacity>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', marginTop: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  formcontainer: { marginTop: 20, gap: 20 },
  input: { borderWidth: 1, padding: 10, width: 230, borderRadius: 5 },
  button: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  btntext: { color: '#fff', fontWeight: 'bold' },
  message:{fontSize:20,color:"red"},
});
