import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default WelcomeScreen = ({title, subtitle}) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>{title}</Text>
            <AnimatedLottieView 
                style={styles.image} 
                source={require('../assets/animations/deliveryfast.json')} 
                autoPlay 
                loop
            />            
            <Text style={styles.subtitle}>{subtitle}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#20D2BB',
        alignItems: 'center',
    },
    title:{
        fontSize: 23,
        color: 'white',
        marginTop: 70,
        marginBottom:20
    },
    subtitle:{
        fontSize: 20,
        color: 'white',
        marginVertical: 30
    },
    image:{
        height: 350,
        width: 300,
    },
})
