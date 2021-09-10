import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default HomeScreen = ({navigation, userStateHandler}) => {

    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        getUserData();
    }, [])

    const getUserData = async () =>{
        const user = await AsyncStorage.getItem('USER');
        setUserData(JSON.parse(user))
    }

    return (
        <View style={styles.container}>

            <View style= {styles.header}>
                <TouchableOpacity onPress={async () =>{
                    await AsyncStorage.removeItem('USER');
                    userStateHandler(false);
                }}>
                <Image style={styles.menuIcon} source={require('../assets/images/logout.png')} />
                </TouchableOpacity>
                <Text style={styles.locationText}>Current location</Text>
                <Image style={styles.profileIcon} source={require('../assets/images/profile.jpg')} />
            </View>
            <View style={styles.body}>
                <Text style={styles.greeting}>Hello, {userData != null ? userData.user_name : ''}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    header:{
        height:55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },
    menuIcon:{
        width: 33,
        height: 33,
    },
    profileIcon:{
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    locationText:{
        fontFamily: 'Overpass-Bold',
        alignSelf:'center'
    },
    body:{
        flex:1,
        padding:10
    },
    greeting:{
        fontFamily:'Overpass-SemiBold',
        fontSize: 22
    }
})