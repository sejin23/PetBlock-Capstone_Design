import React, {Component} from 'react';
import { createSwitchNavigator } from 'react-navigation';
import Loginscreen from '../screens/Loginscreen';
import Selectscreen from '../screens/Selectscreen';
import Petinfoscreen from '../screens/Petinfoscreen';
import Diagscreen from '../screens/Diagscreen';

export default createSwitchNavigator({
  Login: Loginscreen,
  Select: Selectscreen,
  Petinfo: Petinfoscreen,
  Diagnosis: Diagscreen,
},{
  initialRouteName: 'Login'
});