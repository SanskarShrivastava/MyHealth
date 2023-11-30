import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";


const BottomNavigation = ({navigation}) => {
  return (
    <View style={styles.bottomView}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Completed')
      }}>
        <Image source={require('../../src/images/confirm.png')} style={styles.bottomIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Pending')
      }}>
        <Image source={require('../../src/images/pending.png')} style={styles.bottomIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Extra')
      }}>
        <Image source={require('../../src/images/search.png')} style={styles.bottomIcon}/>
      </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  bottomView: {
    width: "99%",
    height: 50,
    borderRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 5,
    backgroundColor: "#2683C3",
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },
  bottomIcon:{
    width:50,
    height:50,
  }
  

});
export default BottomNavigation;
