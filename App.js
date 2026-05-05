import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import Home from './src/screens/Home';
import Maininput from "./src/components/Maininput";

const App = () => {
  const [value,setValue] = useState("");



  return (
    <View style={styles.container}>
      <Home />
      {/* <Maininput options={{value:value, onChangeText:(t)=> setValue(t)}} />
        <Text>{value}</Text> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 30,
  },
});
