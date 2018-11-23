import React, {Component} from 'react';
import { View, Text, TextInput, ScrollView, AsyncStorage } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RSA, RSAKeychain} from 'react-native-rsa-native';
import Styles from '../../styles';
let secret = 'secret message';
export default class Joinscreen extends Component {
  state = {
    username: "",
    publickey: "",
    user_account_address: "0xd3731973336253C81c63FB6e15e1df8585951c89",
    Pet_name: ""
  };
  
  async storeitems() {
    try {
      await AsyncStorage.multiSet([
        ["username", this.state.username],
        ["publickey", this.state.publickey],
        ["Pet_name", this.state.Pet_name]
      ]);
    } catch(err) {
      alert("warning: "+err);
    }
  }
  sendUserInfo = () => {
    RSA.generate()
	  .then(keys=>{
      AsyncStorage.setItem("privatekey", keys.private);
      this.setState({"publickey": keys.public});
    });
    this.storeitems();
    this.postJoinFromApi();
  }
  async postJoinFromApi() {
    const url = 'http://203.252.34.61:3001/api/auth/register';
    try{
      let response =  await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      });
      let responseJson = await response.json();
      alert(responseJson.message);
    } catch(error){
      console.log(error);
    }
  }
  _backward = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <ScrollView contentContainerStyle={Styles.joincontainer}>
          <View style={Styles.joinicon} >
            <Icon name="user-circle" style={{paddingBottom: 15, paddingTop: 20}} size={48} />
          </View>
          <View style={Styles.jointext} >
            <View style={Styles.jointextform}>
              <View style={Styles.joinname}>
                <Text >Your Name : </Text>
              </View>
              <View style={Styles.joinblankform}>
                <TextInput style={Styles.joinblank} onChangeText={(username) => this.setState({username})} value={this.state.username}/>
              </View>
            </View>
            <View style={Styles.jointextform}>
              <View style={Styles.joinname}>
                <Text >Pet Name : </Text>
              </View>
              <View style={Styles.joinblankform}>
                <TextInput style={Styles.joinblank} onChangeText={(Pet_name) => this.setState({Pet_name})} value={this.state.Pet_name}/>
              </View>
            </View>
            <Text>{this.state.privatekey}</Text>
          </View>
          <View style={Styles.joinbutton} >
            <View style={Styles.lowButton}>
              <View style={Styles.custombtn}>
                  <CustomButton style={{fontSize: 15}} title='확인' onPress={this.sendUserInfo} /> 
              </View>
              <View style={Styles.custombtn}>
                  <CustomButton style={{fontSize: 15}} title='취소' onPress={this._backward} />
              </View>
            </View>
          </View>
      </ScrollView>
    );
  }
}

//this._PressButton.bind(this)