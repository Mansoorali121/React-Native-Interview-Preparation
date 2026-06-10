// // // // // import { FlatList, StyleSheet, Text, View } from 'react-native';
// // // // // import React from 'react';
// // // // // import { s, vs } from 'react-native-size-matters';
// // // // // import THeader from './src/components/THeader';
// // // // // import Myinput from './src/components/Myinput';
// // // // // import Status from './src/components/Status';
// // // // // import Taskcard from './src/components/Taskcard';
// // // // // import Tasks from './src/screens/Tasks';
// // // // // import Daysname from './src/components/Daysname';
// // // // // import Taskscard from './src/components/Taskscard';

// // // // // const App = () => {
// // // // //  const data = [
// // // // //   {
// // // // //     id: 1,
// // // // //     title: 'Wirefarming',
// // // // //     time: '12:00 PM',
// // // // //     description: 'Make some ideation from skretch and wireframes',
// // // // //     color: '#fc569e',
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     title: 'UI Design',
// // // // //     time: '1:00 PM',
// // // // //     description: 'Design mobile screens Make some ideation from skretch ',
// // // // //     color: '#36817c',
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     title: 'Meeting',
// // // // //     time: '3:00 PM',
// // // // //     description: 'Client discussion  Make some ideation from skretch ',
// // // // //     color: '#6e741c',
// // // // //   },
// // // // //     {
// // // // //     id: 4,
// // // // //     title: 'Backend',
// // // // //     time: '5:00 PM',
// // // // //     description: 'Client discussion about backend development',
// // // // //     color: '#1e482f',
// // // // //   },
// // // // //   {
// // // // //     id: 5,
// // // // //     title: 'Code Review',
// // // // //     time: '4:00 PM',
// // // // //     description: 'Client discussion about backend development',
// // // // //     color: '#124b7d',
// // // // //   },
// // // // // ];

// // // // //   return (
// // // // //     <View style={{ backgroundColor: '#fff', flex: 1 }}>
// // // // //       <View style={styles.container}>
// // // // //         <Tasks />
// // // // //         <Daysname />
// // // // //         {/* <Taskscard /> */}
// // // // //         showVerticalScrollIndicator = {false}
// // // // //         <FlatList data={data} keyExtractor={(item)=>item.id}
// // // // //         renderItem={({item})=>(
// // // // //           <Taskscard {...item}  />
// // // // //   )}
// // // // //         />

// // // // //         {/* <THeader />
// // // // //         <View style={styles.titlesscontainer}>
// // // // //           <Text style={styles.title}>Good Morning, Rifat!</Text>
// // // // //           <Text style={styles.description}>
// // // // //             You have <Text style={styles.descpt}>49 tasks</Text> this month
// // // // //           </Text>
// // // // //         </View>
// // // // //         <Myinput />
// // // // //         <Status />
// // // // //         <View
// // // // //           style={{
// // // // //             marginTop: vs(20),
// // // // //             flexDirection: 'row',
// // // // //             justifyContent: 'space-between',
// // // // //           }}
// // // // //         >
// // // // //           <Text style={styles.title1}>Todays Tasks</Text>
// // // // //           <Text style={styles.title2}>See All</Text>
// // // // //         </View>
// // // // //         <Taskcard /> */}
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     marginTop: s(20),
// // // // //     marginHorizontal: vs(21),
// // // // //   },
// // // // //   titlesscontainer: { marginTop: vs(25) },
// // // // //   title: { fontSize: s(15), fontFamily: 'Outfit-Thin', color: 'gray' },
// // // // //   description: { fontSize: s(33), fontFamily: 'Outfit-Medium' },
// // // // //   descpt: { color: '#5959e19f', fontWeight: 'bold' },
// // // // //   title1: { fontSize: s(25), fontFamily: 'Outfit-Medium', marginBottom: s(10) },
// // // // //   title2: {
// // // // //     fontSize: s(15),
// // // // //     fontFamily: 'Outfit-Regular',
// // // // //     color: 'gray',
// // // // //     marginBottom: s(10),
// // // // //   },
// // // // // });

// // // // import { StyleSheet, Text, View } from 'react-native';
// // // // import React from 'react';
// // // // import T2header from './src/components/T2header';
// // // // import { s } from 'react-native-size-matters';
// // // // import T2text from './src/components/T2text';
// // // // import Searchbutton from './src/components/Searchbutton';
// // // // import Filterbutton from './src/components/Filterbutton';
// // // // import T2tabs from './src/components/T2tabs';
// // // // import T2card from './src/components/T2card';
// // // // import T2footer from "./src/components/T2footer";

// // // // const App = () => {
// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <View style={{ marginHorizontal: s(20), backgroundColor: '#fff' }}>
// // // //         <T2header />
// // // //         <T2text />
// // // //         <View style={styles.buttonscontainer}>
// // // //           <Searchbutton />
// // // //           <Filterbutton />
// // // //         </View>
// // // //         <T2tabs />
// // // //         <T2card />
// // // //         <T2footer />
// // // //       </View>
// // // //     </View>
// // // //   );
// // // // };

// // // // export default App;

// // // // const styles = StyleSheet.create({
// // // //   container: { backgroundColor: '#fff', flex: 1 },
// // // //   buttonscontainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'space-between',
// // // //     gap: s(3),
// // // //   },
// // // // });

// // // import { FlatList, StyleSheet, Text, View } from 'react-native';
// // // import React from 'react';
// // // import { s } from 'react-native-size-matters';
// // // import T3header from './src/components/T3header';
// // // import T3text from './src/components/T3text';
// // // import Selecteditem from './src/components/Selecteditem';
// // // import T3cardheader from "./src/components/T3cardheader";
// // // import T3card from "./src/components/T3card";
// // // import T2footer from "./src/components/T2footer";
// // // import Roundedbtn from "./src/components/Roundedbtn";

// // // const App = () => {
// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={{ marginHorizontal: s(10), backgroundColor: '#fff' }}>
// // //         <T3header />
// // //         <T3text />
// // //         <Selecteditem />
// // //         <T3cardheader/>
// // //         <T3card />
// // //         <Roundedbtn/>
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // export default App;

// // // const styles = StyleSheet.create({
// // //   container: { backgroundColor: '#fff', flex: 1 },
// // // });

// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import Tasks3 from "./src/screens/Tasks3";

// // const App = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Tasks3 />
// //     </View>
// //   )
// // }

// // export default App;
// // const styles = StyleSheet.create({
// //   container:{backgroundColor:"#fff",flex:1},
// // })

// import { StyleSheet, Text, View, Image } from 'react-native';
// import React from 'react';
// import { s, vs } from 'react-native-size-matters';
// import Bheader from './src/components/Bheader';
// import BAddbutton from './src/components/BAddbutton';
// import Bdescription from "./src/components/Bdescription"
// import Bsubheader from "./src/components/Bsubheader";
// import Baddcardbutton from "./src/components/Baddcardbutton";

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.halfcontainer}>
//         <Bheader />
//       </View>
//       <Image
//         source={require('./src/assets/roasted.png')}
//         style={styles.foodImage}
//       />

//       <View style={styles.halfcontainer2}>
//         <BAddbutton />
//         < Bdescription/>
//         <Bsubheader />
//         < Baddcardbutton title="Add To Cart" />
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   halfcontainer: {
//     flex: 0.4,
//     backgroundColor: '#FF7A45',
//   },

//   halfcontainer2: {
//     flex: 0.6,
//     backgroundColor: '#fff',

//     // upar ki taraf overlap
//     marginTop: -30,

//     borderTopLeftRadius: s(45),
//     borderTopRightRadius: s(45),

//     overflow: 'hidden',
//   },
//   foodImage: {
//     width: s(420),
//     height: vs(420),
//     resizeMode: 'contain',

//     position: 'absolute',
//     top: '8%',
//     alignSelf: 'center',

//     shadowColor: '#e05219',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 20,
//     elevation: 15,
//   },
// });

// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { s } from 'react-native-size-matters';
// import Hheader from './src/components/Hheader';
// import Htext from './src/components/Htext';
// import HsearchButton from './src/components/HsearchButton';
// import Hcategory from './src/components/Hcategory';
// import Htabs from './src/components/Htabs';
// import Hfootertabs from './src/components/Hfootertabs';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Hheader />
//       <Htext />
//       <HsearchButton />
//       <Hcategory />
//       <Htabs />
//       <Hfootertabs />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fffff',
//     flex: 1,
//   },
// });

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Cheader from './src/components/Cheader';
import Cproduct from "./src/components/Cproduct";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.halfcontainer}>
        <Cheader />
      </View>
      <View style={styles.whitecontainer}>
        <Cproduct />
                <Cproduct />
        <Cproduct />

      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffff' },
  halfcontainer: { backgroundColor: '#FF7A45', flex: 0.2 },
  whitecontainer: {
    flex: 0.8,
    backgroundColor: '#ffff',
    overflow: 'hidden',
    marginTop: -50,

    borderTopLeftRadius: s(45),
    borderTopRightRadius: s(45),
  },
});
