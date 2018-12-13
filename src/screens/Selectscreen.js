import React, {Component} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from '../styles';

export default class Selectscreen extends Component{
    otprequest = () => {
        const url = 'http://13.124.213.62:3001/api/fileRegister/file_list';
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
                    responseJson.message,
                    'Show this OTP to your veterinarian',
                );
            });
        }catch(err){
            console.log(err);
        }
    }
    showmykey = () => {
        
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
                <View style={Styles.middle1} />
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
                    <TouchableOpacity style={Styles.largeButton} onPress={this.nextActivity} >
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