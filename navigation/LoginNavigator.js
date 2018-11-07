import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../src/screens/LoginScreen';
import JoinScreen from '../src/screens/JoinScreen';

export default createStackNavigator(
{
    Login: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Login'
        })
    },
    Join: {
        screen: JoinScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Join'
        })
    }
},
);