import React, {useState , useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';
import HistoryScreen from './screens/HistoryScreen';

import { ActivityIndicator, Text, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Route =()=>{

    const [user, setUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkUserLoggedIn();
    }, [])

    const checkUserLoggedIn = async () =>{
        const userData = await AsyncStorage.getItem('USER');
        userData != null ? setUser(true) : null
        setIsLoading(false)
    }

    const userStateHandler = (userState) =>{
        setUser(userState);
    }

    //Tab k saath internal routing krni hai tw ismen add krou screen
    function homeRoutes(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Homes" options={{headerShown:false}} >
                    {(props) => <HomeScreen {...props} userStateHandler={userStateHandler} />}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }

    function historyRoutes(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Histories" component={HistoryScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        )
    }

    function notificationRoutes(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Notifications" component={NotificationScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        )
    }

    //Bottom tabs
    function bottomTab(){

        return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions = {{
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarActiveBackgroundColor: 'white',
                    tabBarHideOnKeyboard: true,
                    tabBarInactiveTintColor: 'black',
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                    tabBarShowLabel: true,
    
                    tabBarStyle:{
                        height: 50,
                        position:'absolute',
                        backgroundColor:'white',
                        shadowColor: 'black',
                        bottom: 20,
                        right:20,
                        left:20,
                    },
                    
                    tabBarItemStyle: {
                        backgroundColor:'white',
                    },
                }}>
    
                <Tab.Screen
                    name="Home"
                    component={homeRoutes}
                    options={{    
                        headerShown: false,
                        tabBarLabel:({ color, size, focused }) => (
                        focused ?
                        <Text style={{color: color, fontSize:12, bottom:5, fontFamily:'Overpass-Regular'}}>Home</Text>: null
                        ),
                        tabBarLabelStyle:{bottom: 5, color: 'white'},
                        tabBarIcon: ({ color,size }) => ( 
                        <AntDesign name="home"  style={{}} size={size} color={color}  />
                        )
                    }}
                />
    
                <Tab.Screen
                    name="History"
                    component={historyRoutes}
                    options={{    
                        headerShown: false,
                        tabBarLabel:({ color, size, focused }) => (
                        focused ?
                        <Text style={{color: color, fontSize:12, bottom:5, fontFamily:'Overpass-Regular'}}>History</Text>: null
                        ),
                        tabBarLabelStyle:{bottom: 5, color: 'white'},
                        tabBarIcon: ({ color,size }) => ( 
                        <AntDesign name="clockcircleo"  style={{}} size={size} color={color}  />
                        )
                    }}
                />
    
                <Tab.Screen
                    name="Notification"
                    component={notificationRoutes}
                    options={{    
                        headerShown: false,
                        tabBarLabel:({ color, size, focused }) => (
                        focused ?
                        <Text style={{color: color, fontSize:12, bottom:5, fontFamily:'Overpass-Regular'}}>Notification</Text>: null
                        ),
                        tabBarLabelStyle:{bottom: 5, color: 'white'},
                        tabBarIcon: ({ color,size }) => ( 
                        <AntDesign name="notification"  style={{}} size={size} color={color}  />
                        )
                    }}
                />

            </Tab.Navigator>
        );
    }

    //Routing before login
    function authRoutes(){
        return(
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
                <Stack.Screen name="Login" options={{headerShown:false}} >
                    {(props) => <LoginScreen {...props} userStateHandler={userStateHandler} />}
                </Stack.Screen>
                <Stack.Screen name="Register" options={{headerShown:false}} >
                    {(props) => <RegisterScreen {...props} userStateHandler={userStateHandler} />}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }

    //Routing after login
    //Tab k baghair internal routing krni hai tw ismen add krou screen
    const bottomTabRoutes = () => {
        return(
            <Stack.Navigator initialRouteName="InApp">
                <Stack.Screen name="InApp" component={bottomTab} options={{headerShown:false}} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        )
    }

    const SplashLoader = () => {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <AnimatedLottieView 
                    style={{width:'100%', height:'100%'}}
                    source={require('./assets/animations/splash.json')} 
                    autoPlay 
                    loop
                /> 
            </View>
        )
    }

    
    //Top level routing
    if(!isLoading){
        return(
            <NavigationContainer>
                {user ? bottomTabRoutes() : authRoutes()}
            </NavigationContainer>
        ) 
    } else{
        return <SplashLoader/>
    }
}

export default Route;