import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../components/CustomButton';
import {RSA, RSAKeychain} from 'react-native-rsa-native';
import Styles from '../../styles';

export default class Loginscreen extends Component {
    state = {
        isloggedin: "",
        usrname: "",
        privatekey: `-----BEGIN RSA PRIVATE KEY-----
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        -----END RSA PRIVATE KEY-----`
    }
    componentDidMount() {
        AsyncStorage.multiGet(["isloggedin", "username", "privatekey"])
        .then(response => {
            this.setState({"isloggedin": response[0][1]});
            this.setState({"usrname": response[1][1]});
            this.setState({"privatekey": response[2][1]});
        });
    }
    _signup = () => {
        this.props.navigation.navigate('Join');
    }
    _signin = () => {
        this.postidentify();
    }
    _signout = () => {
        AsyncStorage.setItem("isloggedin", "false");
        this.setState({isloggedin: "false"});
    }
    async postidentify() {
        const url = 'http://203.252.34.114:3001/api/auth/';
        await fetch(url+'authreq', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.usrname
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("response is "+responseJson.message);
            RSA.sign(responseJson.message, this.state.privatekey)
            .then(signature => {
                console.log(signature);
                fetch(url+'signature', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: signature
                    })
                })
                .then((resp) => resp.json())
                .then((respJson) => {
                    if(respJson.message == "valid_signature"){
                        AsyncStorage.setItem("isloggedin", "true");
                        this.setState({isloggedin: "true"});
                    }
                })
                .catch((err) => {
                    console.log("2nd fetch "+err);
                });
            })
            .catch((err) => {
                console.log("sig: "+err);
            });
        })
        .catch((err) => {
            console.log("1st fetch "+err);
        });
    }
    render() {
        if(this.state.isloggedin == "true"){
            return (
                <View style={Styles.container}>
                    <Icon name="user-circle" style={{paddingBottom: 15}} size={48} onPress={this._signout} />
                </View>
            )
        }
        else{
            return (
                <View style={Styles.container}>
                    <View style={Styles.switchheader}>
                        <Text>header</Text>
                    </View>
                    <Icon name="user-circle" style={{flex: 2, paddingBottom: 15}} size={48} />
                    <View style={Styles.inputtextform}>
                        <Text>Hello {this.state.usrname}</Text>
                    </View>
                    <View style={Styles.lowButton}>
                        <View style={Styles.custombtn}>
                            <CustomButton style={{fontSize: 15}} title='로그인' onPress={this._signin} />
                        </View>
                        <View style={Styles.custombtn}>
                            <CustomButton style={{fontSize: 15}} title='회원가입' onPress={this._signup} />
                        </View>
                    </View>
                </View>
            );
        }
    }
}