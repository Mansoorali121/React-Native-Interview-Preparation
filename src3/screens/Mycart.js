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
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';
import Hheader from '../components/Hheader';

const cartData = [
  {
    id: '1',
    title: 'Chicken Burger',
    time: '30 mins',
    rating: '4.8 (205 Reviews)',
    price: '$10.96',
    quantity: 2,
    image: require('../assets/Burgerrr.jpg'),
  },
  {
    id: '2',
    title: 'Pizza Parlor',
    time: '25 mins',
    rating: '4.6 (180 Reviews)',
    price: '$12.50',
    quantity: 1,
    image: require('../assets/pizza.png'),
  },
];

const Mycart = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        {/* Food Image */}
        <Image source={item.image} style={styles.image} />

        {/* Content */}
        <View style={styles.content}>
          {/* Top Row */}
          <View style={styles.topRow}>
            <Text style={styles.title}>{item.title}</Text>

            <TouchableOpacity style={styles.deleteBtn}>
              <Image
                source={require('../assets/delete.png')}
                style={styles.deleteImage}
              />
            </TouchableOpacity>
          </View>

          {/* Time */}
          <Text style={styles.time}>⏱ {item.time}</Text>

          {/* Rating */}
          <Text style={styles.rating}>⭐ {item.rating}</Text>

          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.minusBtn}>
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>{item.quantity}</Text>

              <TouchableOpacity style={styles.plusBtn}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Hheader title="My Cart" />

      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: vs(20),
        }}
      />
    </View>
  );
};

export default Mycart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: s(20),
    marginTop: vs(15),
    padding: s(12),
    borderRadius: s(20),
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
    fontSize: s(15),
    fontWeight: '600',
    color: '#000',
  },

  deleteBtn: {
    width: s(20),
    height: vs(20),
    borderRadius: s(10),
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
    fontSize: s(12),
    color: '#666',
    marginTop: vs(5),
  },

  rating: {
    fontSize: s(12),
    color: '#666',
    marginTop: vs(5),
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vs(10),
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
    fontSize: s(14),
    fontWeight: 'bold',
  },

  quantity: {
    marginHorizontal: s(15),
    fontSize: s(14),
    fontWeight: '600',
    color: '#000',
  },

  price: {
    fontSize: s(12),
    color: '#000',
    marginStart:s(5)
  },
});