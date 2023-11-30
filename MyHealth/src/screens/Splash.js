import {View,Text, StyleSheet,Image} from 'react-native'
import React from 'react'
const Splash = () => {
  return(
    <View style={styles.container}>
    {/* <Image style={styles.imgStyle} source={require('../../src/images/Logo.png')}/> */}
      <Text style={styles.mainHeader}>MyHealth</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#2683C3'
  },
  logo:{
    width: 40,
    height:40,
    tintColor:"#fff",
  },
  imgStyle:{
    height:100,
    width:100,

  }

});

export default HomeScreen;