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





export default function Bids() {
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
                    <TouchableOpacity onPress={()=>navigation.navigate('Wallet')}><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="wallet" type="entypo" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.blue, textAlign:'center'}}>Wallet</Text>
                    </View></TouchableOpacity>
                </View>
    </View>
    );

    const [bidsData, setBidsData] = useState({'bids':[{'id':0,'origin':'DCA','dest':'MCO','aircraft':'Boeing 737-800','depart':'10:20 AM','duration':'2.5'},
    {'id':1,'origin':'DCA','dest':'MCO','aircraft':'Boeing 737-800','depart':'10:20 AM','duration':'2.5'},
    {'id':2,'origin':'DCA','dest':'MCO','aircraft':'Boeing 737-800','depart':'10:20 AM','duration':'2.5'},
    {'id':3,'origin':'DCA','dest':'MCO','aircraft':'Boeing 737-800','depart':'10:20 AM','duration':'2.5'},
    {'id':4,'origin':'DCA','dest':'MCO','aircraft':'Boeing 737-800','depart':'10:20 AM','duration':'2.5'},
    {'id':5,'origin':'DCA','dest':'MCO','aircraft':'Boeing 737-800','depart':'10:20 AM','duration':'2.5'},]})

    const sheetRef = React.useRef(null);

    const bidsList = bidsData.bids.map((data) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('Bid')}><>
            <View style={{borderBottomColor:theme.blue, borderBottomWidth:0.5, width:'80%', alignSelf:'center'}}></View>
                    <View style={{marginTop:'.5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between', marginTop:'2.5%'}}>
                        <Text style={{fontFamily:'B', color:theme.blue}}>{data.origin} → {data.dest}</Text>
                        <Text style={{fontFamily:'B', color:theme.blue}}>{data.depart}</Text>
                    </View>
                    <View style={{marginTop:'.5%', paddingHorizontal:'10%', flexDirection:'row', justifyContent:'space-between', marginBottom:'2.5%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>{data.aircraft}</Text>
                        <Text style={{fontFamily:'R', color:theme.blue}}>{data.duration} hours</Text>
                    </View>
            </></TouchableOpacity>
        )
    }
    );

    

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
                    <Text style={{color:theme.white, fontFamily:'R'}}>Miles Flown: 20,000</Text>
                    </View>
                    <Icon name="chevron-right" type="entypo" style={{marginTop:'50%'}} color="white"></Icon>
                </View>
                <View style={{marginTop:'10%'}}></View>
                <View style={{width:'80%', height:'52.25%', backgroundColor:theme.white, opacity:0.75, borderRadius:7, alignSelf:'center', paddingTop:'5%'}}>
                    <Text  style={{fontFamily:'R', color:theme.blue, fontSize:24, marginLeft:'5%'}}>Ongoing Bids</Text>
                    
                    <View style={{marginTop:'5%'}}></View>
                    {bidsList}
                    <View style={{borderBottomColor:theme.blue, borderBottomWidth:0.5, width:'80%', alignSelf:'center'}}></View>


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