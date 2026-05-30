import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs ,s} from 'react-native-size-matters';

const Selecteditem = () => {
  return (
    <View style={styles.cont}>
      <Text>Selecteditem</Text>
    </View>
  )
}

export default Selecteditem;

const styles = StyleSheet.create({
    cont:{marginTop:vs(30), marginHorizontal:s
        (20)
    },
})