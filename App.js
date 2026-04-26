import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [name,setName] = useState("");
  const [list,setList] = useState([]);

  //   Temperory Add without SQLIte
  const addUser = () => {
    if(name.trim() === ""){
      return ;
    }
    const newUser = {
      id:Date.now().toString(),
      name:name
    }
    setList([...list, newUser]);
    setName("");
  }
  return (
    <View>
      <Text>SqLite App Step 1</Text>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({})