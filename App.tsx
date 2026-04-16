import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const validateName = () => {
    if (name.trim() === "") {
      setMessage("Name required ❌");
    } else if (name.length < 3) {
      setMessage("Name too short ❌");
    } else {
      setMessage("Valid Name ✅");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Check Name" onPress={validateName} />

      <Text style={styles.result}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
  },
});