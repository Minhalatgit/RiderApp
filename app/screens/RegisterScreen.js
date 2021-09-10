import React, { useState } from 'react'
import { 
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native'
import ButtonComponent from './ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default RegisterScreen = ({navigation, userStateHandler}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const emailChangeHandler = (text)=>{
        setEmail(text);
    }
    const passwordChangeHandler = (text)=>{
        setPassword(text);
    }
    const loginHandler = ()=>{
        navigation.navigate('Login');
    }
    const registerHandler = ()=>{
        Keyboard.dismiss()
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            userStateHandler(true);
        }, 500);
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.registerTitle}>Register</Text>

                <TextInput 
                    style={styles.emailInput}
                    placeholder='Enter username'
                />

                <TextInput 
                    style={styles.emailInput}
                    placeholder='Enter email'
                    keyboardType='email-address'
                    value= {email}
                    onChangeText= {emailChangeHandler}
                />

                <TextInput 
                    style={styles.emailInput}
                    placeholder='Enter password'
                    secureTextEntry={true}
                    value= {password}
                    onChangeText= {passwordChangeHandler}
                />

                <TextInput 
                    style={styles.emailInput}
                    placeholder='Enter confirm password'
                    secureTextEntry={true}
                />

                <ButtonComponent text='Register' isLoading={isLoading} clickHandler={registerHandler}/>
                <Text style={styles.loginText} onPress={loginHandler}>Already have an account? Login Now!</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#20D2BB',
        alignItems: 'center',  
    },
    registerTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        color:'white',
        marginVertical: 50
    },
    emailInput:{
        width:250,
        height:40,
        borderWidth: 1,
        borderColor: 'white',
        marginVertical:10,
        borderRadius: 10,
        paddingHorizontal:20
    },
    loginText:{
        color:'white',
        marginTop:10,
        fontWeight:'bold'
    }
})
