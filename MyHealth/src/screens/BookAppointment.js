import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CommonBtn from "../components/CommonBtn";
let DaysList = [];
const BookAppointment = ({navigation}) => {
  const [Slot, setSlot] = useState(-1);
  const [SelectedGender, setSelectedGender] = useState(0);
  const [SelectedDay, setSelectedDay] = useState(-1);
  const [Days, setDays] = useState([]);
  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({ day: i, selected: false });
    }
    setDays(DaysList);
  }, []);
  const getDays = (month) => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <Image
          source={require("../../src/images/psychiatrist.png")}
          style={styles.docImg}
        />
        <Text style={styles.name}>Doctor Narendra Modi</Text>
        <Text style={styles.spcl}>Skin Doctor</Text>
        <Text style={styles.heading}>Select Date</Text>
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Days}
            keyExtractor={({item, index}) => index}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: SelectedDay == index ? "#2683c3" : "white",
                    marginLeft: 10,
                    borderWidth: SelectedDay == index ? 0 : 1,
                  }}
                  onPress={() => {
                    
                    if(item.day < new Date().getDate()){}
                    else{
                        setSelectedDay(index);
                    }
                  }}
                >
                  <Text
                    style={{ color: SelectedDay == index ? "#fff" : "blue" }}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList
            numColumns={2}
            data={[
              "10:00-12:00PM",
              "12:00-02:00PM",
              "20:00-04:00PM",
              "06:00-08:00PM",
            ]}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    { borderColor: Slot == index ? "#2683C3" : "black" },
                  ]}
                  onPress={() => {
                    setSlot(index);
                  }}
                >
                  <Text style={{ color: Slot == index ? "#2683c3" : "black" }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput style={styles.nameInput} placeholder={"Enter Name"} />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: SelectedGender == 0 ? "#2683c3" : "black",
              },
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}
          >
            <Image
              source={require("../../src/images/male.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: SelectedGender == 1 ? "#2683c3" : "black",
              },
            ]}
            onPress={() => {
              setSelectedGender(1);
            }}
          >
            <Image
              source={require("../../src/images/female.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <CommonBtn w={"90%"} h={45} txt={"Book Now"} status={true} onClick={() => {
           navigation.navigate('Success');
        }} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  docImg: {
    width: 100,
    height: 100,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 3,
  },
  spcl: {
    fontSize: 14,
    fontWeight: "700",
    alignSelf: "center",
    backgroundColor: "#2683C3",
    color: "white",
    padding: 5,
    borderRadius: 10,
  },
  timeSlot: {
    width: "45%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "700",
    marginLeft: 20,
    fontSize: 18,
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: "90%",
    height: 45,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
export default BookAppointment;
