
import { View, Text, StyleSheet, TouchableOpacity, Alert,Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  console.log(email, password);
  const Signup=()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    Alert.alert(`User Registered Successfully`);
     navigation.navigate("Login")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage);
  });

  }
  return (
    <View style={styles.mainContainer}>
    <Image source={require('../../src/images/Logo.png')} style={{width: 100,height:100,alignSelf:'center',justifyContent:'center'}}/>
      <Text style={styles.mainHeader}>Registration form</Text>
      <Text style={styles.description}>
        {" "}
        You can reach us anytime via @myhealth.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(actualData) => setEmail(actualData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(passData) => setPassword(passData)}
        />
      </View>
      
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: "#4630EB",marginTop:30
          },
        ]}
        onPress={() => Signup()}
      >
        <Text style={[styles.buttonText,{color:  "white" }]}>Register</Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: "center",
          justifyContent: "center",
          color: "white",
          marginTop: 20,
        }}
      >
        If Already Registered then: 
      </Text>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: "#4630EB",
            marginTop: 20,
          },
        ]}
        onPress={() => {
                navigation.navigate("Login");
              }}
      >
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            paddingTop: 10,
            color: "white",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  labels: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    // fontFamily: "regular",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "RGBA(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    fontSize: 18,
  },
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 70,
    backgroundColor: "#2683C3",
  },
  mainHeader: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#fff",
    paddingBottom: 20,
    lineHeight: 25,
  },
  buttonStyle: {
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    paddingLeft: 140,
    paddingTop: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
});
export default Register;
