import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { TextInput } from "react-native-paper";
import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";
const ProfileScreen = () => {
  const [fullName, setFullName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  useEffect(() => {
    const ReadData = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFullName(docSnap.data().Fullname);
        setPhone(docSnap.data().Phone);
        setAddress(docSnap.data().Address);
        setGender(docSnap.data().Gender);
        setDob(docSnap.data().Dob);
        setHeight(docSnap.data().Height);
        setWeight(docSnap.data().Weight);
      }
    };
    ReadData();
  }, []);
  const saveData = async () => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      Fullname: fullName,
      Phone: phone,
      Address: address,
      Gender: gender,
      Dob: dob,
      Height: height,
      Weight: weight,
    }).then(() => {
      Alert.alert("Your Profile is Saved");
    });
  };
  const updateProfile = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(docRef, {
      Fullname: fullName,
      Phone: phone,
      Address: address,
      Gender: gender,
      Dob: dob,
      Height: height,
      Weight: weight,
    }).then(() => {
      Alert.alert("Your Profile is Updated");
    });
  };
  const handleFullNameChange = (text) => {
    if (/[^a-zA-Z]/.test(text)) {
      Alert.alert("Error", "You can only enter alphabets");
    } else {
      setFullName(text);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Header />
      <TextInput
        label={"Full Name"}
        // onChangeText={(text) => setFullName(text)}
        onChangeText={handleFullNameChange}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={fullName}
      />

      <TextInput
        label={"Phone"}
        onChangeText={(text) => {
          // Only allow numbers
          const regex = /^[0-9]*$/;
          if (regex.test(text)) {
            // Only allow up to 10 digits
            if (text.length <= 10) {
              setPhone(text);
            } else {
              alert("You can only enter up to 10 digits");
            }
          } else {
            alert("You can only enter numbers");
          }
        }}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={phone}
      />
      <TextInput
        label={"Address"}
        onChangeText={(text) => setAddress(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={address}
      />
      <TextInput
        label={"Gender"}
        onChangeText={(text) => setGender(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={gender}
      />
      <TextInput
  label={"Date of Birth in ddmmyyyy"}
  onChangeText={(text) => {
    const formattedText = text.replace(/[^0-9]/g, '').substr(0, 8);
    if (formattedText.length === 8) {
      const day = formattedText.substr(0, 2);
      const month = formattedText.substr(2, 2);
      const year = formattedText.substr(4, 4);
      const date = new Date(`${year}-${month}-${day}`);
      if (isNaN(date.getTime())) {
        setDob("");
        Alert.alert("Invalid date format", "Please enter a valid date in the format dd/mm/yyyy");
      } else {
        setDob(`${day}/${month}/${year}`);
      }
    } else {
      setDob(formattedText);
    }
  }}
  style={{
    marginTop: 20,
    backgroundColor: "#2683C3",
    width: "95%",
    marginLeft: 10,
  }}
  value={dob}
/>


      

      <TextInput
        label={"Enter Height in cm"}
        onChangeText={(text) => setHeight(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={height}
      />
      <TextInput
        label={"Enter Weight in Kg"}
        onChangeText={(text) => setWeight(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={weight}
      />

      <TouchableOpacity
        style={{
          marginTop: 30,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "#2683C3",
          width: "50%",
          height: 50,
          borderRadius: 10,
        }}
        onPress={() => saveData()}
      >
        <Text
          style={{
            alignSelf: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          Save Data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 30,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "green",
          width: "50%",
          height: 50,
          borderRadius: 10,
        }}
        onPress={() => updateProfile()}
      >
        <Text
          style={{
            alignSelf: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          Update Profile
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default ProfileScreen;
