import React, {Component} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from '../styles';

export default class Selectscreen extends Component{
    state = {
        privatekey: "",
        publicaddress: ""
    }
    otprequest = () => {
        const url = 'http://13.124.213.62:3001/api/auth/OTPreq';
        try{
            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Happy'
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(
                    responseJson.OTP
                );
            });
        }catch(err){
            console.log(err);
        }
    }
    showmykey = () => {
        
    }
    weatherinfo = () => {
        this.props.navigation.navigate('Petinfo');
    }
    nextactivity = () => {
        this.props.navigation.navigate('Petinfo');
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Image source={require('../image/head.png')}/>
                </View>
                <View style={{flex: 2, alignItems: 'center'}}>
                     <TouchableOpacity style={{justifyContent: 'center'}} onPress={this.weatherinfo}>
                        <Image style={Styles.weatherimagestyle} source={require('../image/weathericon.png')} />
                     </TouchableOpacity>
                </View>
                <View style={Styles.body}>
                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={this.nextactivity}>
                        <Image style={Styles.dogimagestyle} source={require('../image/dog.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center'}}>
                        <Image style={Styles.dogimagestyle} source={require('../image/adddog.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                    }}>
                    <TouchableOpacity style={Styles.largeButton} onPress={this.weatherinfo} >
                        <Text style={{color: '#CDDDF1'}}>Show keys</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.largeButton} onPress={this.otprequest} >
                        <Text style={{color: '#CDDDF1'}}>OTP request</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}