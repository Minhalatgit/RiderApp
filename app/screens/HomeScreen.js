import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

export default HomeScreen = ({navigation, userStateHandler}) => {

    const [userData, setUserData] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState();

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
                <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.profileIcon} source={require('../assets/images/profile.jpg')} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.greeting}>Hello, {userData != null ? userData.user_name : ''}</Text>
                <View style={styles.wallet}>
                    <Text >Wallet</Text>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Php" value="Php" />
                        <Picker.Item label="Kotlin" value="Kotlin" />
                        <Picker.Item label="Html" value="Html" />
                        <Picker.Item label="Python" value="Python" />
                    </Picker>
                </View>
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
        padding:10,
        
    },
    greeting:{
        fontFamily:'Overpass-SemiBold',
        fontSize: 22
    },
    wallet:{
        width:'100%',
        height:200,
        marginTop:10,
        padding:10,
        marginVertical:10,
        borderRadius:10,
        backgroundColor:'white'
    }
})