import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProfileMain from './ProfileMain';
import Loginscreen from './Loginscreen';
import Joinscreen from './Joinscreen';
import Styles from '../../styles';

export default createStackNavigator({
    Main: {
        screen: ProfileMain,
        navigationOptions: ({navigation}) => ({
            title: "Profile",
            headerLeft: (
                <TouchableOpacity
                    style={Styles.headerButton}
                    onPress={() => navigation.openDrawer()}>
                    <Icon name="bars" size={20} />
                </TouchableOpacity>
            ),
        }),
    },
    Login: {
        screen: Loginscreen,
        navigationOptions: ({navigation}) => ({
            title: "Login",
            headerLeft: (
                <TouchableOpacity
                    style={Styles.headerButton}
                    onPress={() => navigation.openDrawer()}>
                    <Icon name="bars" size={20} />
                </TouchableOpacity>
            ),
        }),
    },
    Join: {
        screen: Joinscreen,
        navigationOptions: ({navigation}) => ({
            title: 'Join'
        }),
    },
},{
    initialRouteName: 'Login'
});