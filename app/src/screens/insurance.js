import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon, CheckBox } from 'react-native-elements'
import { useFonts } from 'expo-font';
import {theme} from '../theme.js';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';





export default function Insurance() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [fontLoaded] = useFonts({
        B: require('../assets//b.ttf'),
        M: require('../assets/m.ttf'),
        R: require('../assets/r.ttf')

      });

      const _getInsurance = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "action": "getpremium",
          "flightid": "3"
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://us-central1-aiot-fit-xlab.cloudfunctions.net/flyfair", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
    const renderContent = () => (
    <View
        style={{
        backgroundColor: theme.white,
        padding: 10,
        height: 200,
        alignContent:'center'
        }}
    >

<TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}><Icon name="chevron-up" type="entypo" color={theme.grey} size={30} style={{textAlign:'center', alignSelf:'center'}}></Icon></TouchableOpacity>
        <View style={{flexDirection:'row', paddingHorizontal:'10%', marginTop:'10%', justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Findride')}><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="car" type="font-awesome" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.blue, textAlign:'center'}}>Ride pool</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Bids')}><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="search" type="font-awesome" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.blue, textAlign:'center'}}>Find Trip</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="arrowright" type="antdesign" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.blue, textAlign:'center'}}>Book Flights</Text>
                    </View></TouchableOpacity>
                </View>
    </View>
    );

    const sheetRef = React.useRef(null);

    if (!fontLoaded) {
        return null;
      }
    else{
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg-app.png')} style={{width:'100%', height:'100%'}} imageStyle={{resizeMode:'cover'}}>
                <View style={{marginTop:'10%'}}></View>
                <View style={{flexDirection:'row', paddingHorizontal:'10%'}}><Text style={{fontFamily:'B', fontSize:20, color:theme.grey, textAlignVertical:'center'}}>FlyFair</Text>
                <Image source={require('../assets/logo.png')} style={{width:50, height: 50, resizeMode:'contain'}}></Image></View>

                <View style={{backgroundColor:theme.black, opacity:0.7, width:'80%', alignSelf:'center', paddingVertical:'2.5%', paddingHorizontal:'5%', borderRadius:5, flexDirection:'row', justifyContent:'space-between',}}>
                    <View>
                    <Text style={{color:theme.white, fontFamily:'B', marginBottom:'2.5%', fontSize:17}}>John Doe</Text>
                    <Text style={{color:theme.white, fontFamily:'R'}}>AAdvantage member</Text>
                    <Text style={{color:theme.white, fontFamily:'R'}}>Available award miles: 20,000</Text>
                    </View>
                    <Icon name="chevron-right" type="entypo" style={{marginTop:'50%'}} color="white"></Icon>
                </View>
                <View style={{marginTop:'10%'}}></View>
                <View style={{width:'80%', height:'61%', backgroundColor:theme.white, opacity:0.75, borderRadius:7, alignSelf:'center', paddingTop:'5%'}}>
                    <Text  style={{fontFamily:'R', color:theme.blue, fontSize:24, marginLeft:'5%'}}>Continue Booking</Text>
                    <View style={{flexDirection:'row', justifyContent:'center', marginTop:'5%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue, fontSize:30, marginHorizontal:'5%'}}>DCA</Text>
                        <Icon name="arrowright" type="antdesign" color={theme.blue} size={30}></Icon>
                        <Text style={{fontFamily:'R', color:theme.blue, fontSize:30, marginLeft:'5%'}}>DFW</Text>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.black, textAlign:'center'}}>{Date(13348588).split('00')[0].toLocaleUpperCase()}</Text>
                    <View style={{marginTop:'5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Passenger</Text>
                    </View>
                    <View style={{borderBottomColor:theme.blue, borderBottomWidth:0.5, width:'80%', alignSelf:'center'}}></View>
                    <View style={{marginTop:'.5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'B', color:theme.blue}}>John Doe</Text>
                    </View>
                    <View style={{marginTop:'5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Flight No.</Text>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Departure</Text>
                    </View>
                    <View style={{borderBottomColor:theme.blue, borderBottomWidth:0.5, width:'80%', alignSelf:'center'}}></View>
                    <View style={{marginTop:'.5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'B', color:theme.blue}}>AA 0012</Text>
                        <Text style={{fontFamily:'B', color:theme.blue}}>10:20 AM</Text>
                    </View>
                    <View style={{borderBottomColor:theme.blue, borderBottomWidth:1, width:'80%', alignSelf:'center', marginTop:'5%'}}></View>
                    <View style={{marginTop:'.5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Aircraft</Text>
                        <Text style={{fontFamily:'B', color:theme.blue}}>Boeing 737-800</Text>
                        </View>
                        <Icon name="wifi" color={theme.blue}></Icon>
                    </View>



                    <View style={{marginVertical:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'B', color:theme.blue}}>Travel Insurance</Text>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt</Text>
                        <View style={{flexDirection:'row', marginTop:'10%'}}>
                            <Text  style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:35, color:theme.blue}}>$104</Text>
                            <CheckBox
                            title='Add travel insurance'
                            checked={checked}
                            onPress={()=>setChecked(!checked)}
                            textStyle={{fontFamily:'R', color:theme.blue}}
                            containerStyle={{backgroundColor:'transparent', borderWidth:0}}
                            />
                        </View>
                        
                        <Text style={{fontFamily:'R', color:theme.blue, marginTop:'5%'}}></Text>
                    </View>
                    <TouchableOpacity><View style={{backgroundColor:theme.blue, padding:'4%', borderBottomEndRadius:7, borderBottomLeftRadius:7, marginTop:'1%', width:'100%'}}>
                        <Text style={{fontFamily:'B', textAlign:'center', color:theme.white}}>Confirm</Text>
                    </View></TouchableOpacity>
                </View>

                <BottomSheet
                    ref={sheetRef}
                    snapPoints={[120, 200, 50]}
                    borderRadius={10}
                    renderContent={renderContent}
                />

            </ImageBackground>
            
         
        </View>
    );

}
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: theme.black
    },

});