import{View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
const Success = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image source={require('../../src/images/checked.png')} style={styles.success}/>
            <Text style={styles.msg}>{'Your Appointment is Successfully Booked'}</Text>
            <TouchableOpacity style = {[styles.gotohome,{backgroundColor:"#2683C3"}]}
            onPress={() => {
                navigation.navigate('HomeScreen');
            }}>
                <Text style={{color: "#fff"}}>Go To Home</Text>
            </TouchableOpacity>
        </View>

    );
};
const styles = StyleSheet.create({
    container:{
        flexL: 1,
        justifyContent:'center',
        alignItems:'center',

    },
    success: {
        width: 100,
        height: 100,
        marginTop: 280
    },
    msg:{
        fontSize:16,
        fontWeight:'700',
        marginTop: 20,
    },
    gotohome:{
        width:150,height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth:0.5,
        marginTop: 20
    }

})
export default Success;