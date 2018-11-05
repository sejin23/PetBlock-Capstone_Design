import React, {Component} from 'react';
import { SwitchNavigator } from 'react-navigation';
import LoginScreen from '../src/screens/LoginScreen';
import JoinScreen from '../src/screens/JoinScreen';
import AppNavigator from './AppNavigator';

export default SwitchNavigator(
{
    AppNavigator,
    Login: LoginScreen,
    Join: JoinScreen,
},
{
    initialRouteName: 'Login'
});