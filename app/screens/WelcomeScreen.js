import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import WelcomeComponent from './WelcomeComponent'
import PagerView from 'react-native-pager-view';

export default Welcome = ({navigation}) => {

  const [pagePosition, setPagePosition] = useState(0)

  const nextClickHandler = () =>{
    console.log('Next clicked');
    if(pagePosition == 2){
      navigation.navigate('Login');
    }
  }
  const skipClickHandler = () =>{
    console.log('Skip clicked')
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#20D2BB"/>
      
      <PagerView style={styles.pagerView} initialPage={0} onPageSelected={(e)=> setPagePosition(e.nativeEvent.position)}>
          <View key="1">
            <WelcomeComponent title="Title one" subtitle="subtitle one"/>
          </View>
          <View key="2">
            <WelcomeComponent title="Title two" subtitle="subtitle two"/>
          </View>
          <View key="3">
            <WelcomeComponent title="Title three" subtitle="subtitle three"/>
          </View>
      </PagerView>

      <View style={styles.dots}>
          <View style={{...styles.dotOne, backgroundColor:pagePosition==0 ?'yellow':'lightgreen'}}/>
          <View style={{...styles.dotTwo, backgroundColor:pagePosition==1 ?'yellow':'lightgreen'}}/>
          <View style={{...styles.dotThree, backgroundColor:pagePosition==2 ?'yellow':'lightgreen'}}/>
      </View>

      {pagePosition == 0 ?
        <TouchableOpacity style={styles.skipBtn} onPress={skipClickHandler}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>: null
      }

      <TouchableOpacity style={styles.nextBtn} onPress={nextClickHandler}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  pagerView: {
    flex:1,
    justifyContent:'center'
  },
  dots:{
    flexDirection:'row',
    position: 'absolute',
    bottom: 30,
    justifyContent:'center',
    width: '100%',
  },
  dotOne:{
    width:8,
    height:8,
    borderRadius: 5,
  },
  dotTwo:{
    width:8,
    height:8,
    borderRadius: 5,
    marginHorizontal: 5
  },
  dotThree:{
    width:8,
    height:8,
    borderRadius: 5
  },
  skipBtn:{
    position:'absolute',
    right:20,
    padding:10
  },
  skipText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 16
  },
  nextBtn:{
    position:'absolute',
    right:20,
    bottom: 40,
    paddingHorizontal:10,
    paddingVertical:5,
    borderStyle:'solid',
    borderWidth:1,
    borderColor: 'white',
    borderRadius: 10
  },
  nextText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 16
  }
})
