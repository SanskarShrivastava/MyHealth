import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { TextInput } from "react-native-paper";
import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";
const Doctor = () => {
  const [fullName, setFullName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [licenseId, setLicenseId] = useState(null);
  const [expirience, setExpirience] = useState(null);
  const [speciality, setSpeciality] = useState(null);
  const [address, setAddress] = useState(null);
  const [collegeName, setCollegeName] = useState(null);

  useEffect(() => {
    const ReadData = async () => {
      const docRef = doc(db, "doctors", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFullName(docSnap.data().Fullname);
        setPhone(docSnap.data().Phone);
        setLicenseId(docSnap.data().LicenseId);
        setExpirience(docSnap.data().Expirience);
        setSpeciality(docSnap.data().Speciality);
        setAddress(docSnap.data().Address);
        setCollegeName(docSnap.data().CollegeName);
      }
    };
    ReadData();
  }, []);
  const saveData = async () => {
    await setDoc(doc(db, "doctors", auth.currentUser.uid), {
      Fullname: fullName,
      Phone: phone,
      LicenseId: licenseId,
      Expirience: expirience,
      Speciality: speciality,
      Address: address,
      CollegeName: collegeName,
    }).then(() => {
      Alert.alert("Your Profile is Saved our Team Will Contact You Shortly");
    });
  };
  const updateProfile = async () => {
    const docRef = doc(db, "doctors", auth.currentUser.uid);
    await updateDoc(docRef, {
      Fullname: fullName,
      Phone: phone,
      LicenseId: licenseId,
      Expirience: expirience,
      Speciality: speciality,
      Address: address,
      CollegeName: collegeName,
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
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: "green",
          marginTop: 20,
          marginLeft: 50,
        }}
      >
        Make Your Doctor Profile.
      </Text>
      <Image
        source={require("../../src/images/doctor.png")}
        style={{ width: 60, height: 60, marginLeft: "80%", marginTop: -50 }}
      />
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
        label={"Doctor License Number"}
        onChangeText={(text) => setLicenseId(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={licenseId}
      />
      <TextInput
        label={"Expireience in years"}
        onChangeText={(text) => setExpirience(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={expirience}
      />
      <TextInput
        label={"Speciality"}
        onChangeText={(text) => setSpeciality(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={speciality}
      />
      <TextInput
        label={"Locality or Address"}
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
        label={"College Name"}
        onChangeText={(text) => setCollegeName(text)}
        style={{
          marginTop: 20,
          backgroundColor: "#2683C3",
          width: "95%",
          marginLeft: 10,
        }}
        value={collegeName}
      />
      <TouchableOpacity
        style={{
          marginTop: 10,
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
          marginTop: 10,
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
export default Doctor;
