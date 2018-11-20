import React, {Component} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RSA, RSAKeychain} from 'react-native-rsa-native';
import Styles from '../../styles';

export default class Joinscreen extends Component {
  state = {
    userid: "",
    userpw: "",
    userconfpw: "",
    username: "",
    publickey: "",
    user_account_address: "0xd3731973336253C81c63FB6e15e1df8585951c89",
    Pet_name: ""
  };
  _PressButton = () => {
    this.postJoinFromApi();
  }
  _encrypt = () => {
    RSA.generateKeys(30)
	   .then(keys=>{
		this.setState({publickey: keys.public, user_account_address: keys.private});
	   });
  }
  async postJoinFromApi() {
    try{
      let response =  await fetch('http://115.145.226.74:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      });
    } catch(error){
      console.log(error);
    }
  }
  render() {
    return (
      <View style={Styles.joincontainer}>
        <Icon name="user-circle" style={{paddingBottom: 15, paddingTop: 20}} size={48} />
        <View style={{height: 350, width: '100%'}}>
          <View style={Styles.jointextform}>
            <View style={Styles.joinname}>
              <Text >ID : </Text>
            </View>
            <View style={Styles.joinblankform}>
              <TextInput style={Styles.joinblank} onChangeText={(userid) => this.setState({userid})} value={this.state.userid} />
            </View>
          </View>
          <View style={Styles.jointextform}>
            <View style={Styles.joinname}>
              <Text >PW : </Text>
            </View>
            <View style={Styles.joinblankform}>
              <TextInput style={Styles.joinblank} secureTextEntry={true} onChangeText={(userpw) => this.setState({userpw})} value={this.state.userpw} />
            </View>
          </View>
          <View style={Styles.jointextform}>
            <View style={Styles.joinname}>
              <Text >Confirm PW : </Text>
            </View>
            <View style={Styles.joinblankform}>
              <TextInput style={Styles.joinblank} secureTextEntry={true} onChangeText={(userconfpw) => this.setState({userconfpw})} value={this.state.userconfpw}/>
            </View>
          </View>
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
        </View>
        <View style={{flex: 1}}>
          <View style={Styles.lowButton}>
              <View style={Styles.custombtn}>
                  <CustomButton style={{fontSize: 15}} title='확인' onPress={()=>alert("확인")} />
              </View>
              <View style={Styles.custombtn}>
                  <CustomButton style={{fontSize: 15}} title='취소' onPress={this._PressButton.bind(this)} />
              </View>
          </View>
        </View>
      </View>
    );
  }
}