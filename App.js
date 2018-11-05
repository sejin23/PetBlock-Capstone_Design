import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import AppNavigator from './navigation/AppNavigator';
import LoginNavigator from './navigation/LoginNavigator';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

type Props = {};
export default class App extends Component<Props> {
  state = {
    isLoginComplete: false
  }
  render() {
    if(!this.state.isLoginComplete) {
      return (
        <View style={styles.container}>
          <LoginNavigator />
        </View>
      );
    }/* else {
      return (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      );
    }*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
