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
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';






export default function Findride() {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
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
                <View style={{width:'80%', height:'64.75%', backgroundColor:theme.white, opacity:0.75, borderRadius:7, alignSelf:'center', paddingTop:'5%'}}>
                <Text  style={{fontFamily:'R', color:theme.blue, fontSize:24, marginLeft:'5%'}}>Ride Pool</Text>
                    <View style={{marginVertical:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Destination</Text>
                        <TextInput style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:15}} placeholder="Street, City, State, ZIP"></TextInput>
                    </View>
                    <View style={{marginVertical:'.5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Time</Text>
                        <Text onPress={()=>showMode('time')} style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:15}}>{date==Date(1598051730000) ?'Set Time':date.toUTCString()}</Text>
                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                        )}
                    </View>
                    <View style={{marginVertical:'5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>No. of bags</Text>
                        <TextInput style={{borderBottomColor:theme.blue, borderBottomWidth:1, fontFamily:'R', fontSize:15}}></TextInput>
                    </View>
                    <View style={{marginVertical:'.5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Are you comfortable being the first stop?</Text>
                        <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Yes" value="yes" />
                        <Picker.Item label="No" value="no" />
                        </Picker>
                    </View>
                    <View style={{marginVertical:'.5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>Do you prefer travelling with the same gender?</Text>
                        <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Yes" value="yes" />
                        <Picker.Item label="Doesn't matter" value="no" />
                        </Picker>
                    </View>
                    <View style={{marginVertical:'.5%', paddingHorizontal:'10%'}}>
                        <Text style={{fontFamily:'R', color:theme.blue}}>What age groups would you prefer to travel with?</Text>
                        <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="18-24" value="18" />
                        <Picker.Item label="25-40" value="25" />
                        <Picker.Item label="40-55" value="40" />
                        <Picker.Item label="55+" value="55" />
                        <Picker.Item label="Doesn't matter" value="any" />
                        </Picker>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Rides')}><View style={{backgroundColor:theme.blue, padding:'4%', borderBottomEndRadius:7, borderBottomLeftRadius:7, marginTop:'2%', width:'100%'}}>
                        <Text style={{fontFamily:'B', textAlign:'center', color:theme.white}}>Find ride</Text>
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