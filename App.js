import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const trimName = name.trim();
    const trimEmail = email.trim();

    // Validation
    if (trimName === "" || trimEmail === "") {
      setMessage("All fields required ❌");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimName,
          email: trimEmail,
        }),
      });

      const data = await response.json();

      // Success
      setMessage("Data submitted successfully ✅");
      console.log(data);

      setName("");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form + API</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      {/* Loading */}
      {loading && <ActivityIndicator size="large" color="blue" />}

      {/* Message */}
      {message !== "" && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  message: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});