import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

type Props = {};
export default class StartScreen extends Component<Props> {
  _pushJoin(){
    this.props.navigator.push({
      screen: 'petblock.JoinScreen',
      title: 'Join',
      passProps: {}
    });
  }
  _pushLogin(){
    this.props.navigator.push({
      screen: 'petblock.LoginScreen',
      title: 'Login',
      passProps: {}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text>SKKone</Text></View>
        <View style={styles.title}><Text>Welcome to Pet Block!</Text></View>
        <View style={styles.content}>
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            source={require('../image/cutedog.png')}/>
        </View>
        <View style={styles.footer}>
          <CustomButton 
            buttonColor={'#023e71'}
            title={'회원가입'}
            onPress={this._pushJoin.bind(this)}/>
          <CustomButton 
            buttonColor={'#444'}
            title={'로그인'}
            onPress={this._pushLogin.bind(this)}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'8%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    width:'100%',
    height:'15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    fontSize: 50
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  footer: {
    width:'100%',
    height:'25%',
    padding: 10,
    backgroundColor: 'white',
  },
  signupbtn: {
    width: '80%',
    flex: 1,
    backgroundColor: '#9aa9ff'
  },
  loginbtn: {
    width: '80%',
    flex: 1,
    backgroundColor: '#9aa9ff'
  },
});
