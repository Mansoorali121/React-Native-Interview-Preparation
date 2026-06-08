import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Cheader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.itemcontainer}>
             <Image
          source={require('../assets/burger/backk.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Cart</Text>

         <Image
          source={require('../assets/burger/close.png')}
          style={styles.image}
        />
        </View>
    </View>
  )
}

export default Cheader;

const styles = StyleSheet.create({
    container:{marginTop:vs(20),marginHorizontal:s(15)},
     image: { height: vs(20), width: s(20), tintColor:"#ffff"
   },
   title:{fontSize:s(20),color:"#fff",fontFamily:"Outfit-Regular"},
   itemcontainer:{flexDirection:"row", justifyContent:"space-between"},
})