import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function setData(key, value){
    try {    
        await AsyncStorage.setItem(key, value)
    } catch (e) {  
        
    }
}

export default async function getData(key){
    try {    
        const value = await AsyncStorage.getItem('@storage_Key')    
        if(value !== null) {
        // value previously stored    
        }
    } catch(e) {
    // error reading value  
    }
}