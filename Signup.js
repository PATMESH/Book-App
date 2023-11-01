import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView,TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { auth } from "./firebase";

function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <View style={styles.container}>
      <View style={styles.registercontainer}>
        <Text style={styles.header}>Register</Text>
        

        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={{ height: 20, color: "red" }}>
          {error ? error.substring(10) : null}
        </Text>

        <TouchableOpacity
          onPress={handleRegister}
          style={{
            backgroundColor: "#28a745",
            padding: 10,
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "white" }}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 15,
    paddingTop: 70,
    alignItems:'center',
    justifyContent:'center',
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  registercontainer: {
    paddingLeft: 15,
    paddingTop: 55,
    paddingRight: 10,
    paddingBottom: 40,
    borderRadius: 30,
    borderWidth: 4,
    backgroundColor: "lightgreen",
    elevation: 4,
    borderColor: "#29be15a1",
    shadowColor: "#038ae4",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  input: {
    width: 315,
    height: 40,
    fontSize: 17,
    borderColor: "green",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    backgroundColor: "white",
    height: 40,
    width: 315,
    marginBottom: 15,
  },
  loginText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
  },
  loginLink: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#00b109",
  },
});

export default Register;
