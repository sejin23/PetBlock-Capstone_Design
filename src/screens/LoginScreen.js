import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
import { createStackNavigator } from 'react-navigation';

type Props = {};
export default class Login extends Component<Props> {
  _signIn = () => {
    this.props.navigation.navigate('Join');
  };
  _signUp = () => {
    this.props.navigation.navigate('AppNavigator');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize:32,paddingBottom:10}}>Login Please</Text>
          <View style={{width:"100%",borderBottomWidth:1,borderColor:'#444'}} />
        </View>
        <View style={styles.content}>
        <View style={styles.inputform}>
            <TextInput style={styles.inputblank} placeholder="ID"/>
          </View>
          <View style={styles.inputform}>
            <TextInput style={styles.inputblank} placeholder="Password"/>
          </View>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#023e73'}
            title={'Login'}
            onPress={this._signUp}/>
          <CustomButton
            buttonColor={'#444'}
            title={'Join'}
            onPress={this._signIn}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    width:'100%',
    height:'13%',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingTop: 30
  },
  footer: {
    width:'100%',
    height:'25%',
    padding: 10,
  },
  inputform: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:10
  },
  inputblank: {
    borderColor: '#aaa',
    width:'95%',
    height:35,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
});
