import React, {Component} from 'react';
import { View, ScrollView, Image, Text, AppRegistry, TouchableOpacity } from 'react-native';
import Styles from '../styles';
import RNFS from 'react-native-fs';

export default class Diagscreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            files: [],
            isopened: false,
            count: 0,
        }
        this.downloadfile = this.downloadfile.bind(this);
    }
    downloadfile = () => {
        RNFS.downloadFile({
            fromUrl: 'http://13.124.213.62:3001/api/fileRegister/filedownloads/ParkSejin/'+this.state.files[this.state.count],
            toFile: `${RNFS.DocumentDirectoryPath}/diagnosis`+this.state.count.toString()+`.jpg`
        }).promise.then((r) => {
            this.setState({isopened: true});
        }).catch((err) => {
            console.log("err");
        });
    }
    downloadlist = () => {
        const url = 'http://13.124.213.62:3001/api/fileRegister/file_list';
        try{
            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Happy'
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.file_list.length);
                for(let i=0; i<responseJson.file_list.length; i++){
                    this.setState({
                        files: [
                            ...this.state.files,
                            responseJson.file_list[i]
                        ],
                    });
                }
            });
        }catch(err){
            console.log(err);
        }
    }
    render() {
        let filelist = this.state.files.map((item, key) => {
            return(
                <View key={key}>
                    <TouchableOpacity onPress={this.downloadfile}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                </View>
            )
        });
        let filexist = this.state.isopened? (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}>
                <Image style={{
                    width: "100%",
                    height: 530,
                    backgroundColor: 'black',
                }}
                source={{
                    uri: `file://${RNFS.DocumentDirectoryPath}/diagnosis`+this.state.count.toString()+`.jpg`,
                    scale: 1
                }} />
            </View>
        ): null;
        return (
            <ScrollView style={{backgroundColor: '#A0C4C5'}}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={this.downloadlist}>
                        <Image source={require('../image/head.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, backgroundColor: '#A0C4C5'}}>
                    <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{this.setState({count: this.state.count+1})}}>
                        <Text style={{fontSize: 20}}>next file</Text>
                    </TouchableOpacity>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        {filelist}
                    </View>
                    {filexist}
                </View>
            </ScrollView>
        )
    }
}

AppRegistry.registerComponent('downloadFile', () => downloadFile);