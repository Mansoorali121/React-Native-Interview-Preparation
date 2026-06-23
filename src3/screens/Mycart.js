// import { Image, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import Hheader from '../components/Hheader';
// import { s, vs } from 'react-native-size-matters';

// const Mycart = () => {
//   return (
//     <View>
//       <Hheader title="My Cart" />
//       <View style={styles.card}>
//         {/* Image Container */}
//         <View>
//           <Image
//             source={require('../assets/Burgerrr.jpg')}
//             style={styles.image}
//           />
//         </View>
//         {/* Texts Container */}
//         <View style={{ flexDirection: 'row', gap: s(60), marginTop: vs(10) }}>
//           <Text>Chicken Burger</Text>
//           <Image
//             source={require('../assets/delete.png')}
//             style={styles.deleteimage}
//           />
//           <View>
//             <Text>3o min</Text>
//                         <Text>3o min</Text>
//             <Text>3o min</Text>
//             <Text>3o min</Text>
//             <Text>3o min</Text>

//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Mycart;

// const styles = StyleSheet.create({
//   image: { height: vs(120), width: s(120), borderRadius: s(10) },
//   card: {
//     backgroundColor: 'red',
//     marginHorizontal: s(20),
//     height: vs(150),
//     borderRadius: s(20),
//     flexDirection: 'row',
//   },
//   deleteimage: { height: vs(20), width: s(20), tintColor: 'blue' },
//   deletecontainer: {
//     flexDirection: 'row',
//     marginTop: vs(10),
//     marginStart: s(10),
//     gap: s(50),
//   },
//   title: { fontSize: s(14), fontFamily: 'Outfit-Medium' },
//   time: { position: 'absolute' },
// });

// //  <View style={styles.card}>
// //         <View>
// //           <Image
// //             source={require('../assets/Burgerrr.jpg')}
// //             style={styles.image}
// //           />
// //         </View>
// //         <View style={styles.deletecontainer}>
// //           <Text style={styles.title}>Chicken Burger</Text>
// //           <Image
// //             source={require('../assets/delete.png')}
// //             style={styles.deleteimage}
// //           />
// //         </View>

// //       </View>
// //       {/* Time Container */}
// //           <View>
// //         <Text>30 mins</Text>
// //        </View>


import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';
import Hheader from '../components/Hheader';

const Mycart = () => {
  return (
    <View style={styles.container}>
      <Hheader title="My Cart" />

      <View style={styles.card}>
        {/* Food Image */}
        <Image
          source={require('../assets/Burgerrr.jpg')}
          style={styles.image}
        />

        {/* Right Side Content */}
        <View style={styles.content}>
          {/* Top Row */}
          <View style={styles.topRow}>
            <Text style={styles.title}>Chicken Burger</Text>

            <TouchableOpacity style={styles.deleteBtn}>
              <Image
                source={require('../assets/delete.png')}
                style={styles.deleteImage}
              />
            </TouchableOpacity>
          </View>

          {/* Time */}
          <Text style={styles.time}>⏱ 30 mins</Text>

          {/* Rating */}
          <Text style={styles.rating}>⭐ 4.8 (205 Reviews)</Text>

          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            {/* Quantity */}
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.minusBtn}>
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>2</Text>

              <TouchableOpacity style={styles.plusBtn}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>

            {/* Price */}
            <Text style={styles.price}>$10.96</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Mycart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: s(20),
    marginTop: vs(20),
    borderRadius: s(20),
    padding: s(12),
    elevation: 4,
  },

  image: {
    width: s(120),
    height: vs(120),
    borderRadius: s(15),
  },

  content: {
    flex: 1,
    marginLeft: s(15),
    justifyContent: 'space-between',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: s(20),
    fontWeight: '600',
    color: '#000',
    fontFamily:"Outfit-Regular"
  },

  deleteBtn: {
    width: s(40),
    height: vs(40),
    borderRadius: s(20),
    backgroundColor: '#FFF2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteImage: {
    width: s(20),
    height: vs(20),
    tintColor: '#FF4D4D',
    resizeMode: 'contain',
  },

  time: {
    fontSize: s(16),
    color: '#666',
        fontFamily:"Outfit-Regular"

  },

  rating: {
    fontSize: s(16),
    color: '#666',
        fontFamily:"Outfit-Regular"

  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  minusBtn: {
    width: s(38),
    height: vs(38),
    borderRadius: s(19),
    backgroundColor: '#3B1700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusBtn: {
    width: s(38),
    height: vs(38),
    borderRadius: s(19),
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: s(22),
    fontWeight: 'bold',
        fontFamily:"Outfit-Regular"

  },

  quantity: {
    marginHorizontal: s(15),
    fontSize: s(18),
    fontWeight: '600',
    color: '#000',
        fontFamily:"Outfit-Regular"

  },

  price: {
    fontSize: s(24),
    fontWeight: 'bold',
    color: '#000',
        fontFamily:"Outfit-Regular"

  },
});