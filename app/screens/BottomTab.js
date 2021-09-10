import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

    function chat(){
        return(
            <View style={{flex:1, backgroundColor: 'purple'}}/>
        )
    }

    // function profileRoutes(){
    //     return(
    //         <Stack.Navigator>
    //             <Stack.Screen name="Profiles" component={ProfileScreen} options={{headerShown:false}}/>
    //         </Stack.Navigator>
    //     )
    // }

// function BottomTab(){

//     return (
//         <Tab.Navigator 
//             initialRouteName="Home"
//             screenOptions = {{
//                 tabBarInactiveBackgroundColor: 'white',
//                 tabBarActiveBackgroundColor: 'white',
//                 tabBarHideOnKeyboard: true,
//                 tabBarInactiveTintColor: 'black',
//                 tabBarActiveTintColor: 'red',
//                 tabBarInactiveTintColor: 'grey',
//                 tabBarShowLabel: true,

//                 tabBarStyle:{
//                     height: 50,
//                     position:'absolute',
//                     backgroundColor:'white',
//                     bottom: 0,
//                     shadowColor: 'black',
//                 },
                
//                 tabBarItemStyle: {
//                     backgroundColor:'white',
//                 },
//             }}>

//             <Tab.Screen
//                 name="Home"
//                 component={HomeScreen}
//                 options={{    
//                     headerShown: false,
//                     tabBarLabel:({ color, size, focused }) => ( 
//                     focused ?
//                     <Text style={{color: color, fontFamily: 'Overpass-Bold', fontSize:12, bottom:5}}>Home</Text>: null
//                     ),
//                     tabBarLabelStyle:{bottom: 5, color: 'white'},
//                     tabBarIcon: ({ color,size }) => ( 
//                     <AntDesign name="home"  style={{}} size={size} color={color}  />
//                     )
//                 }}
//             />

//             <Tab.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{    
//                     headerShown: false,
//                     tabBarLabel:({ color, size, focused }) => ( 
//                     focused ?
//                     <Text style={{color: color, fontFamily: 'Overpass-Bold', fontSize:12, bottom:5}}>Profile</Text>: null
//                     ),
//                     tabBarLabelStyle:{bottom: 5, color: 'white'},
//                     tabBarIcon: ({ color,size }) => ( 
//                     <AntDesign name="profile"  style={{}} size={size} color={color}  />
//                     )
//                 }}
//             />

//         </Tab.Navigator>
//     );
// }

// const InApp = () => {
//     return(
//         <Stack.Navigator initialRouteName="inApp">
//             <Stack.Screen name="InApp" component={BottomTab} options={{headerShown:false}} />
//             <Stack.Screen name="chat" component={chat} options={{headerShown:false}} />
//         </Stack.Navigator>
//     )
// }
// export default InApp;