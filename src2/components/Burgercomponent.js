import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Burgercomponent = () => {
  return (
    <View style={styles.cont}>
              <Image source={require('../assets/burger.png')} style={styles.image} />
      
    </View>
  )
}

export default Burgercomponent;

const styles = StyleSheet.create({
    cont:{alignItems:"center",justifyContent:"center"},
      image: { height: vs(250), width: s(250) },
    
})