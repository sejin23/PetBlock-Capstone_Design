import React, {Component} from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Settings from './Settings';
import Profile from './Profile';
//import LoginNavigator from './LoginNavigator';
//import HomeScreen from '../src/screens/HomeSrceen';
//import SettingScreen from '../src/screens/SettingScreen';

export default createDrawerNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
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


/*{
  LoginNavigator,
  Home: HomeScreen,
  Setting: SettingScreen
},
{
  initialRouteName: 'Setting'
}*/