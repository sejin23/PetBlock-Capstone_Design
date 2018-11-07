import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';
import {RSA, RSAKeychain} from 'react-native-rsa-native';

type Props = {};
export default class Login extends Component<Props> {
  state = {
    mypets: [],
    username: "",
    publickey: "1",
    user_account_address: "",
    Pet_name: [

    ]
  };

  _signUp = () => {
    this.props.navigation.navigate('Login');
  };

  _encrypt = () => {
    RSA.generateKeys(30)
	   .then(keys=>{
		this.setState({publickey: keys.public, user_account_address: keys.private});
	   });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width:"100%",borderBottomWidth:1,borderColor:'#444'}} />
        <View style={styles.content}>
          <View style={styles.inputform}>
            <Text style={{fontSize:15}}>Name</Text>
            <TextInput style={styles.inputblank} onChangeText={(username) => this.setState({username})}/>
          </View>
          <View style={styles.inputform}>
            <Text style={{fontSize:15}}>Password</Text>
            <TextInput style={styles.inputblank}/>
          </View>
          <View style={styles.inputform}>
            <Text style={{fontSize:15}}>Pet Name</Text>
            <TextInput style={styles.inputblank} onChangeText={(Pet_name) => this.setState({Pet_name})}/>
          </View>
	  <View style={styles.inputform}>
            <Text style={{fontSize:15}}>{this.state.publickey}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#023e73'}
            title={'Confirm'}
            onPress={this._encrypt}/>
          <CustomButton
          buttonColor={'#444'}
          title={'Cancel'}
          onPress={this._signUp}/>
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
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30
  },
  footer: {
    width:'100%',
    height: 120,
    padding: 10
  },
  inputform: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop: 10
  },
  inputblank: {
    borderColor: '#aaa',
    width:'70%',
    height:35,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  }
});
