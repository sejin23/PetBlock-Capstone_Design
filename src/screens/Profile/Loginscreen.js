import React, { Component } from 'react';
import { View, TextInput, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import CustomButton from '../../components/CustomButton';

export default class Loginscreen extends Component {
    state = {
        isloggedin: false,
        userid: "",
        userpw: ""
    }
    _signup = () => {
        this.props.navigation.navigate('Join');
    }
    _signin = () => {
        this.setState({isloggedin: true});
    }
    _signout = () => {
        this.setState({isloggedin: false});
    }
    async postidentify() {
        try{
          let response =  await fetch('http://115.145.226.74:3001/api/auth/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
          });
        } catch(error){
          console.log(error);
        }
      }
    render() {
        if(this.state.isloggedin == true){
            return (
                <View style={Styles.container}>
                    <Icon name="user-circle" style={{paddingBottom: 15}} size={48} />
                    <View style={Styles.lowButton}>
                        <View style={Styles.custombtn}>
                            <CustomButton style={{fontSize: 15}} title='로그아웃' onPress={this._signout} />
                        </View>
                    </View>
                </View>
            )
        }
        else{
            return (
                <View style={Styles.container}>
                    <Icon name="user-circle" style={{paddingBottom: 15}} size={48} />
                    <View style={Styles.inputtextform}>
                        <TextInput style={Styles.inputblank} placeholder="User ID" onChangeText={(userid) => this.setState({userid})} value={this.state.userid}/>
                        
                    </View>
                    <View style={Styles.inputtextform}>
                        <TextInput style={Styles.inputblank} placeholder="Password" secureTextEntry={true} onChangeText={(userpw) => this.setState({userpw})} value={this.state.userpw}/>
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