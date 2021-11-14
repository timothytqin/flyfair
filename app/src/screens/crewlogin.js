import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon, ThemeConsumer } from 'react-native-elements'
import { useFonts } from 'expo-font';
import {theme} from '../theme.js';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';




export default function Crewlogin() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets//b.ttf'),
        M: require('../assets/m.ttf'),
        R: require('../assets/r.ttf')

      });

    if (!fontLoaded) {
        return null;
      }
    else{
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg-app.png')} style={{width:'100%', height:'100%'}} imageStyle={{resizeMode:'cover'}}>
                <View style={{marginTop:'20%'}}></View>
                <View style={{flexDirection:'row', alignSelf:'center'}}><Text style={{fontFamily:'B', fontSize:40, color:theme.grey, textAlignVertical:'center'}}>FlyFair</Text>
                <Image source={require('../assets/logo.png')} style={{width:100, height: 100, resizeMode:'contain'}}></Image></View>
                <View style={{marginTop:'10%'}}></View>
                <View style={{width:'80%', height:'40%', backgroundColor:theme.white, opacity:0.75, borderRadius:7, alignSelf:'center', paddingTop:'5%'}}>
                    <View style={{marginVertical:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Last name</Text>
                        <TextInput style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:15}}></TextInput>
                    </View>
                    <View style={{marginVertical:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>AAdvantage # or username</Text>
                        <TextInput style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:15}}></TextInput>
                    </View>
                    <View style={{marginVertical:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Password</Text>
                        <TextInput style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:15}}></TextInput>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Crewhome')}><View style={{backgroundColor:theme.blue, padding:'4%', borderBottomEndRadius:7, borderBottomLeftRadius:7, marginTop:'11%', width:'100%'}}>
                        <Text style={{fontFamily:'B', textAlign:'center', color:theme.white}}>Login</Text>
                    </View></TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', paddingHorizontal:'10%', marginTop:'10%', justifyContent:'space-between'}}>
                    <TouchableOpacity><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="adduser" type="antdesign" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.grey, textAlign:'center'}}>Join AAdvantage</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity><View>
                    <View style={{backgroundColor:theme.grey, opacity:0.75, borderRadius:50, height:50, width:50, alignSelf:'center'}}>
                        <Icon name="arrowright" type="antdesign" color={theme.blue} style={{marginTop:'20%', alignSelf:'center'}}></Icon>
                    </View>
                    <Text style={{fontFamily:'R', color:theme.grey, textAlign:'center'}}>Continue as traveller</Text>
                    </View></TouchableOpacity>
                </View>

                <Text style={{fontFamily:'R', color:theme.grey, textAlign:'center', marginTop:'15%'}}>Need AAdvantage number or password?</Text>
                <Text style={{fontFamily:'R', color:theme.grey, textAlign:'center', marginTop:'5%'}}>Privacy Policy</Text>

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