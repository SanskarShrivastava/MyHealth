import { View, Text, StyleSheet, FlatList, ScrollView,Image } from "react-native";
import React from "react";
import Header from "../components/Header";
const Completed = () => {
  return (
    <ScrollView>
      <View>
        <Header />
        <View>
          <FlatList
            data={[1, 1, 1, 1, 1, 1,1,1]}
            renderItem={({ item, index }) => {
              return <View style={styles.itemView}>
                <Image source={require('../../src/images/doctor.png')}style={styles.docImage}/>
                <View>
                <Text style={styles.name}>{'Dr. Narendra Modi'}</Text>
                <Text style={styles.time}>{'10:00-12:00PM'}</Text>
                <Text style={[styles.tatus,{backgroundColor:"#286"}]}>{'Booked Appointments'}</Text>
                </View>
              </View>;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width: "94%",
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: 10,
    flexDirection:'row',
  },
  docImage:{
    width:80,
    height:70,
    borderRadius:40,
    marginLeft:10,
    alignItems:'center',
    marginTop:15,
  },
  name:{
    fontSize:18,
    fontWeight:'600',
    marginLeft: 20,
    alignSelf:'center',
    marginTop:10
  },
  time:{
    fontSize:16,
    fontWeight:'700',
    alignSelf:'center',
    
  },
  tatus:{
    fontSize:15,
    fontWeight:'600',
    color:"#f2f2f2",
    marginTop:10,
    marginLeft:20,
    borderRadius:5,

  },
});
export default Completed;
