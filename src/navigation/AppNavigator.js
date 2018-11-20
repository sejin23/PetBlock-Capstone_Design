import React, {Component} from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';

export default createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => <Icon name="user-circle" size={17} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({tintColor}) => <Icon name="user-circle" size={17} />,
    }
  }
});