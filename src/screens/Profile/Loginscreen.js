import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import CustomButton from '../../components/CustomButton';

export default class Loginscreen extends Component {
    _signup = () => {
        this.props.navigation.navigate('Join');
    }
    _signin = () => {
        this.props.navigation.navigate('Main');
    }
    render() {
        return (
            <View style={Styles.container}>
                <Icon name="user-circle" style={{paddingBottom: 15}} size={48} />
                <View style={Styles.inputtextform}>
                    <TextInput style={Styles.inputblank} placeholder="User ID"/>
                    
                </View>
                <View style={Styles.inputtextform}>
                    <TextInput style={Styles.inputblank} placeholder="Password"/>
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