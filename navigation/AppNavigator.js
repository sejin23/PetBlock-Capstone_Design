import React, {Component} from 'react';
import { SwitchNavigator } from 'react-navigation';
import HomeScreen from '../src/screens/HomeSrceen';
import SettingScreen from '../src/screens/SettingScreen';

export default SwitchNavigator({
  Home: HomeScreen,
  Setting: SettingScreen
},
{
  initialRouteName: 'Setting'
});
