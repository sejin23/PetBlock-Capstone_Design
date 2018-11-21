import React, {Component} from 'react';
import { View, Text, TextInput, ScrollView, AsyncStorage } from 'react-native';
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
    privatekey: "",
    user_account_address: "0xd3731973336253C81c63FB6e15e1df8585951c89",
    Pet_name: ""
  };
  componentDidMount() {
    AsyncStorage.getItem("userid").then((value) => {
      this.setState({"userid": value});
    }).done();
    AsyncStorage.getItem("userpw").then((value) => {
      this.setState({"userpw": value});
    }).done();
    AsyncStorage.getItem("username").then((value) => {
      this.setState({"username": value});
    }).done();
    AsyncStorage.getItem("Pet_name").then((value) => {
      this.setState({"Pet_name": value});
    }).done();
  }
  /*async retrieveitems(key) {
    try {
      const item = await AsyncStorage.
    } catch(err) {
      alert("warning: "+err);
    }
  }*/
  async storeitems() {
    try {
      await AsyncStorage.multiSet([
        ["userid", this.state.userid],
        ["userpw", this.state.userpw],
        ["username", this.state.username],
        ["Pet_name", this.state.Pet_name]
      ]);
    } catch(err) {
      alert("warning: "+err);
    }
  }
  _PressButton = () => {
    if(this.state.userpw != this.state.userconfpw){
      alert("check your password!");
    }else{
      this.postJoinFromApi();
    }
  }
  _encrypt = () => {
    this.storeitems();
    RSA.generateKeys(30)
	   .then(keys=>{
		this.setState({publickey: keys.public, privatekey: keys.private});
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
      <ScrollView contentContainerStyle={Styles.joincontainer}>
          <View style={Styles.joinicon} >
            <Icon name="user-circle" style={{paddingBottom: 15, paddingTop: 20}} size={48} />
          </View>
          <View style={Styles.jointext} >
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
            <View style={Styles.jointextform}>
              <View style={Styles.joinname}>
                <Text >Private Key : {this.state.publickey} </Text>
                <Text >address : {this.state.user_account_address} </Text>
              </View>
            </View>
          </View>
          <View style={Styles.joinbutton} >
            <View style={Styles.lowButton}>
              <View style={Styles.custombtn}>
                  <CustomButton style={{fontSize: 15}} title='확인' onPress={this._encrypt.bind(this)} /> 
              </View>
              <View style={Styles.custombtn}>
                  <CustomButton style={{fontSize: 15}} title='취소' onPress={()=>alert("취소")} />
              </View>
            </View>
          </View>
      </ScrollView>
    );
  }
}

//this._PressButton.bind(this)