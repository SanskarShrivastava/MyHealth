import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
const Header = () =>{
    return(
        <View style={styles.header}>
            <Image source={require('../../src/images/Logo.png')} style={styles.logo}/>
        </View>
    );
};
const styles = StyleSheet.create({
    header:{
        height:90,
        width: "100%",
        flexDirection:'row',
        backgroundColor: '#2683C3',
        elevation: 1,
        marginTop: 0,
    },
    title:{
        fontSize:20,
        fontWeight:'600',
        marginLeft: 150,
        color:"#fff",


    },
    logo:{
        alignItems:'center',
        height:60,
        width:60,
        marginTop:10,
        alignSelf:'center',
        marginLeft: 160,
    }
});
export default Header;