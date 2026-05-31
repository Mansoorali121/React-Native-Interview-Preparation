// // import { FlatList, StyleSheet, Text, View } from 'react-native';
// // import React from 'react';
// // import { s, vs } from 'react-native-size-matters';
// // import THeader from './src/components/THeader';
// // import Myinput from './src/components/Myinput';
// // import Status from './src/components/Status';
// // import Taskcard from './src/components/Taskcard';
// // import Tasks from './src/screens/Tasks';
// // import Daysname from './src/components/Daysname';
// // import Taskscard from './src/components/Taskscard';

// // const App = () => {
// //  const data = [
// //   {
// //     id: 1,
// //     title: 'Wirefarming',
// //     time: '12:00 PM',
// //     description: 'Make some ideation from skretch and wireframes',
// //     color: '#fc569e',
// //   },
// //   {
// //     id: 2,
// //     title: 'UI Design',
// //     time: '1:00 PM',
// //     description: 'Design mobile screens Make some ideation from skretch ',
// //     color: '#36817c',
// //   },
// //   {
// //     id: 3,
// //     title: 'Meeting',
// //     time: '3:00 PM',
// //     description: 'Client discussion  Make some ideation from skretch ',
// //     color: '#6e741c',
// //   },
// //     {
// //     id: 4,
// //     title: 'Backend',
// //     time: '5:00 PM',
// //     description: 'Client discussion about backend development',
// //     color: '#1e482f',
// //   },
// //   {
// //     id: 5,
// //     title: 'Code Review',
// //     time: '4:00 PM',
// //     description: 'Client discussion about backend development',
// //     color: '#124b7d',
// //   },
// // ];

// //   return (
// //     <View style={{ backgroundColor: '#fff', flex: 1 }}>
// //       <View style={styles.container}>
// //         <Tasks />
// //         <Daysname />
// //         {/* <Taskscard /> */}
// //         showVerticalScrollIndicator = {false}
// //         <FlatList data={data} keyExtractor={(item)=>item.id}
// //         renderItem={({item})=>(
// //           <Taskscard {...item}  />
// //   )}
// //         />

// //         {/* <THeader />
// //         <View style={styles.titlesscontainer}>
// //           <Text style={styles.title}>Good Morning, Rifat!</Text>
// //           <Text style={styles.description}>
// //             You have <Text style={styles.descpt}>49 tasks</Text> this month
// //           </Text>
// //         </View>
// //         <Myinput />
// //         <Status />
// //         <View
// //           style={{
// //             marginTop: vs(20),
// //             flexDirection: 'row',
// //             justifyContent: 'space-between',
// //           }}
// //         >
// //           <Text style={styles.title1}>Todays Tasks</Text>
// //           <Text style={styles.title2}>See All</Text>
// //         </View>
// //         <Taskcard /> */}
// //       </View>
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     marginTop: s(20),
// //     marginHorizontal: vs(21),
// //   },
// //   titlesscontainer: { marginTop: vs(25) },
// //   title: { fontSize: s(15), fontFamily: 'Outfit-Thin', color: 'gray' },
// //   description: { fontSize: s(33), fontFamily: 'Outfit-Medium' },
// //   descpt: { color: '#5959e19f', fontWeight: 'bold' },
// //   title1: { fontSize: s(25), fontFamily: 'Outfit-Medium', marginBottom: s(10) },
// //   title2: {
// //     fontSize: s(15),
// //     fontFamily: 'Outfit-Regular',
// //     color: 'gray',
// //     marginBottom: s(10),
// //   },
// // });

// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import T2header from './src/components/T2header';
// import { s } from 'react-native-size-matters';
// import T2text from './src/components/T2text';
// import Searchbutton from './src/components/Searchbutton';
// import Filterbutton from './src/components/Filterbutton';
// import T2tabs from './src/components/T2tabs';
// import T2card from './src/components/T2card';
// import T2footer from "./src/components/T2footer";

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={{ marginHorizontal: s(20), backgroundColor: '#fff' }}>
//         <T2header />
//         <T2text />
//         <View style={styles.buttonscontainer}>
//           <Searchbutton />
//           <Filterbutton />
//         </View>
//         <T2tabs />
//         <T2card />
//         <T2footer />
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: { backgroundColor: '#fff', flex: 1 },
//   buttonscontainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     gap: s(3),
//   },
// });

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import T3header from './src/components/T3header';
import T3text from './src/components/T3text';
import Selecteditem from './src/components/Selecteditem';
import T3cardheader from "./src/components/T3cardheader";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: s(10), backgroundColor: '#fff' }}>
        <T3header />
        <T3text />
        <Selecteditem />
        <T3cardheader/>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});
