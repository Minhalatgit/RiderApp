import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'

export default ButtonComponent = ({text, isLoading, clickHandler}) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={clickHandler}>
                {isLoading ? 
                <ActivityIndicator animating={isLoading} />
                :<Text style={styles.text}>{text}</Text>}
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        paddingHorizontal:30,
        paddingVertical:8,
        backgroundColor: 'white',
        borderRadius:5,
        marginTop:10
    },
    text:{
        color:'black'
    },
})
