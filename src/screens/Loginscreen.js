import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import Styles from '../styles';

export default class Loginscreen extends Component{
    async loginserver() {
        const url = 'http://13.124.213.62:3001/api/auth/'
        await fetch(url+'authreq', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'ParkSejin'
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            fetch(url+'signature', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: responseJson.message
                })
            })
            .then((resp) => resp.json())
            .then((respJson) => {
                console.log(respJson.message);
            });
        })
    }
    nextActivity = () => {
        this.loginserver();
        this.props.navigation.navigate('Select');
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.loginupper} />
                <View style={Styles.loginlower}>
                    <View style={Styles.Sectionstyle}>
                        <Image source={require('../image/user.png')} style={Styles.Imagestyle}/>
                        <TextInput style={Styles.logintextinput} underlineColorAndroid='white' />
                    </View>
                    <View style={Styles.Sectionstyle}>
                        <Image source={require('../image/lock.png')} style={Styles.Imagestyle}/>
                        <TextInput style={Styles.logintextinput} underlineColorAndroid='white' secureTextEntry={true} />
                    </View>
                    <View style={{alignItems: 'flex-end', width: 210}}>
                        <Text style={Styles.rightText}>forgot password?</Text>
                    </View>
                    <TouchableOpacity style={Styles.circleButton} onPress={this.nextActivity}>
                        <Text style={{color: '#CDDDF1'}}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={Styles.bottomText}>New here? Sign Up!</Text>
                </View>
            </View>
        );
    }
}