import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Touchable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {  sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  console.log(email, password);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
  }, []);
  const log = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert(`ThankYou ${email}`);
        navigation.replace("HomeScreen");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };
  const resetPassword = () => {
    if (email != null) 
    {
      sendPasswordResetEmail(auth, email)
  .then(() => {
    Alert.alert("password reset email has been sent successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });

    } 
    else if(email = null)
     {
      Alert.alert("Please Enter a Valid Email!");
      
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../src/images/Logo.png")}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          justifyContent: "center",
        }}
      />
      <Text style={styles.mainHeader}>LOGIN FORM</Text>
      <Text style={styles.description}>
        {" "}
        You can reach us anytime via @myhealth.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(actualData) => setEmail(actualData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(passData) => setPassword(passData)}
        />
      </View>
      <View style={{ marginLeft: 7 }}>
        <TouchableOpacity style={{borderColor:'black'}} onPress={() => resetPassword()}>
          <Text style={{ color: "red" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.wrapper, { marginLeft: 6 }]}>
        {
          <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? "#4630EB" : undefined}
          />
        }
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={() => log()}
      >
        <Text style={[styles.buttonText, { color: agree ? "white" : "black" }]}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: "center",
          justifyContent: "center",
          color: "white",
          marginTop: 10,
        }}
      >
        OR
      </Text>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: "#4630EB",
            marginTop: 10,
          },
        ]}
        onPress={() => {
          navigation.navigate("Register");
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
          Register
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
export default Login;
