import React, { useState } from 'react'
import { 
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    ToastAndroid    
} from 'react-native'
import Snackbar from 'react-native-snackbar';
import ButtonComponent from './ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

export default LoginScreen = ({navigation, userStateHandler}) => {
    console.log(userStateHandler);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const emailChangeHandler = (text)=>{
        setEmail(text);
    }
    const passwordChangeHandler = (text) =>{
        setPassword(text);
    }
    const loginHandler = ()=>{
        Keyboard.dismiss()
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let validEmail = false;
        let validPassword = false;
        if(email == ''){
            setEmailError('Email is required');
            validEmail = false;
        } else if(reg.test(email) === false){
            setEmailError('Email is not valid');
            validEmail = false;
        }else{
            setEmailError(null);
            validEmail = true;
        } 
        
        if(password == ''){
            setPasswordError('Password is required');
            validPassword = false;
        }else if(password.length < 4){
            setPasswordError('Password is weak');
            validPassword = false;
        } else{
            setPasswordError(null);
            validPassword = true;
        }

        if (validEmail && validPassword) {
            setIsLoading(true);
            Axios.post('http://9d62-110-93-244-255.ngrok.io/auth/login', 
            {
                'email':email,
                'password':password
            })
            .then(response =>{
                setIsLoading(false);
                console.log(response.data)
                const { status, msg, data } = response.data;
                if (status) {
                    userStateHandler(true);
                    setUserLogin(data)
                } else{
                    Snackbar.show({
                        text: msg,
                        duration: Snackbar.LENGTH_SHORT,
                    });
                }
            })
            .catch(e =>{
                setIsLoading(false);
                console.log('Error', e);
            })
        }
    }
    const registerHandler = ()=>{
        navigation.navigate('Register');
    }

    const setUserLogin = async (data) =>{
        await AsyncStorage.setItem('USER', JSON.stringify(data));
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.loginTitle}>Login</Text>

                <View>
                    <TextInput 
                        style={styles.emailInput}
                        placeholder='Enter email'
                        keyboardType='email-address'
                        value= {email}
                        onChangeText= {emailChangeHandler}
                    />
                    {emailError == null ? null: <Text style={{color:'red'}}>{emailError}</Text>}
                </View>
                
                <View>
                    <TextInput 
                        style={styles.emailInput}
                        placeholder='Enter password'
                        secureTextEntry={true}
                        value= {password}
                        onChangeText= {passwordChangeHandler}
                    />
                    {passwordError == null ? null: <Text style={{color:'red'}}>{passwordError}</Text>}
                </View>
                
                <ButtonComponent text='Login' isLoading={isLoading} clickHandler={loginHandler}/>

                <Text style={styles.registerText} onPress={registerHandler}>Don't have an account? Register Now!</Text>

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
    loginTitle:{
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
    registerText:{
        color:'white',
        marginTop:10,
        fontWeight:'bold'
    }
})
