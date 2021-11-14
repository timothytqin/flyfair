import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon, ThemeConsumer } from 'react-native-elements'
import { useFonts } from 'expo-font';
import {theme} from '../theme.js';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';





export default function Bid() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets//b.ttf'),
        M: require('../assets/m.ttf'),
        R: require('../assets/r.ttf')

      });
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
                    <TouchableOpacity><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="car" type="font-awesome" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.blue, textAlign:'center'}}>Ride pool</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Bids')}><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="gavel" type="font-awesome" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.blue, textAlign:'center'}}>Bids</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="wallet" type="entypo" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.blue, textAlign:'center'}}>Wallet</Text>
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
                    <Text style={{color:theme.white, fontFamily:'R'}}>AA Pilot</Text>
                    <Text style={{color:theme.white, fontFamily:'R'}}>Miles flown: 20,000</Text>
                    </View>
                    <Icon name="chevron-right" type="entypo" style={{marginTop:'50%'}} color="white"></Icon>
                </View>
                <View style={{marginTop:'10%'}}></View>
                <View style={{width:'80%', height:'52.25%', backgroundColor:theme.white, opacity:0.75, borderRadius:7, alignSelf:'center', paddingTop:'5%'}}>
                    <Text  style={{fontFamily:'R', color:theme.blue, fontSize:24, marginLeft:'5%'}}>Place a bid</Text>
                    <View style={{flexDirection:'row', justifyContent:'center', marginTop:'5%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue, fontSize:30, marginHorizontal:'5%'}}>DCA</Text>
                        <Icon name="arrowright" type="antdesign" color={theme.blue} size={30}></Icon>
                        <Text style={{fontFamily:'R', color:theme.blue, fontSize:30, marginLeft:'5%'}}>DFW</Text>
                    </View>
                    <View style={{marginTop:'5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Depart at</Text>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Arrive by</Text>
                    </View>
                    <View style={{borderBottomColor:theme.blue, borderBottomWidth:0.5, width:'80%', alignSelf:'center'}}></View>
                    <View style={{marginTop:'.5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontFamily:'B', color:theme.blue}}>11:30 AM</Text>
                        <Text style={{fontFamily:'B', color:theme.blue}}>1:00 PM</Text>
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
                        <Text style={{fontFamily:'B', color:theme.blue}}>Place your bid</Text>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt</Text>
                        <View style={{flexDirection:'row', marginTop:'10%'}}>
                            <Text  style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:35, color:theme.blue}}>$</Text>
                            <TextInput style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:35}} placeholder="0.00"></TextInput>
                        </View>
                    </View>
                    <TouchableOpacity><View style={{backgroundColor:theme.blue, padding:'4%', borderBottomEndRadius:7, borderBottomLeftRadius:7, marginTop:'11%', width:'100%'}}>
                        <Text style={{fontFamily:'B', textAlign:'center', color:theme.white}}>Place bid</Text>
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