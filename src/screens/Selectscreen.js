import React, {Component} from 'react';
import { View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Styles from '../styles';

export default class Selectscreen extends Component{
    state = {
        privatekey: "0x353543453D5523A66356960D",
        publicaddress: "0x79c18Ae40BbE74F1Cf594614A077609a18A27372"
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
                Alert.alert(responseJson.OTP, '수의사에게 보여주세요.');
            });
        }catch(err){
            console.log(err);
        }
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
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}>
                    <Text style={{textAlign: 'center'}}>내 공개키 : {this.state.privatekey}</Text>
                    <Text style={{textAlign: 'center'}}>내 공개주소 : {this.state.publicaddress}</Text>
                    <TouchableOpacity style={Styles.largeButton} onPress={this.otprequest} >
                        <Text style={{color: '#CDDDF1'}}>OTP request</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}