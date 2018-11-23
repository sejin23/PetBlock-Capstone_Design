import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loginscreen from './Loginscreen';
import Joinscreen from './Joinscreen';
import Styles from '../../styles';

export default createSwitchNavigator({
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