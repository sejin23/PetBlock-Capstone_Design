import { Navigation } from 'react-native-navigation';

import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import JoinScreen from './JoinScreen';
import HomeScreen from './HomeScreen';

export function registerScreens() {
	Navigation.registerComponent('petblock.StartScreen', () => StartScreen);
	Navigation.registerComponent('petblock.LoginScreen', () => LoginScreen);
	Navigation.registerComponent('petblock.JoinScreen', () => JoinScreen);
	//Navigation.registerComponent('petblock.HoemScreen', () => HomeScreen);
}
