import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Loginscreen from '../screens/Loginscreen';
import Selectscreen from '../screens/Selectscreen';
import Petinfoscreen from '../screens/Petinfoscreen';
import Diagscreen from '../screens/Diagscreen';

export default createStackNavigator({
  Select: Selectscreen,
  Petinfo: Petinfoscreen,
  Diagnosis: Diagscreen,
},{
  initialRouteName: 'Select'
});