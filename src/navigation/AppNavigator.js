import React, {Component} from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Loginscreen from '../screens/Loginscreen';
import Selectscreen from '../screens/Selectscreen';
import Petinfoscreen from '../screens/Petinfoscreen';
//import Weatherscreen from '../screens/Weatherscreen';
import Diagscreen from '../screens/Diagscreen';

export default createSwitchNavigator({
  Login: Loginscreen,
  Select: Selectscreen,
  Petinfo: Petinfoscreen,
  //Weather: Weatherscreen,
  Diagnosis: Diagscreen,
},{
  initialRouteName: 'Login'
});