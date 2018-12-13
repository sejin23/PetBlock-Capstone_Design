import React, { Component } from 'react';
import { View, Text, Image, AppRegistry, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNFS from 'react-native-fs';
import Styles from '../../../styles';

export default class MemoryHome extends Component {
    constructor() {
        super()
        this.state = {
          isDone: false,
          filelist: false,
        };
        //this.onDownloadImagePress = this.onDownloadImagePress.bind(this);
    }
    static navigationOptions = ({ navigation }) => ({
        title: "File",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />    
            </TouchableOpacity>
        ),
    });
    render() {
        const flist = this.state.filelist ? (
            <View>
                
            </View>
        ): null;
        return (
            <View style={{alignItems: "center", }}>
                <Text>Hello</Text>
            </View>
        );
    }
}
    /*onDownloadImagePress() {
        RNFS.downloadFile({
            fromUrl: 'http://203.252.34.114:3001/api/fileRegister/filedownloads/jodicks/2018-11-28time_22:59.jpg',
            toFile: `${RNFS.DocumentDirectoryPath}/react.jpg`,
        }).promise.then((r) => {
            this.setState({ isDone: true })
        }).catch((err)=>{
            console.log("errs are"+err);
        });
    }
    
    render() {
        const preview = this.state.isDone ? (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                width: "80%",
                height: 400,
                backgroundColor: 'black',
            }}
            source={{
                uri: `file://${RNFS.DocumentDirectoryPath}/react.jpg`,
                scale: 1
            }} />
            <Text>{`file://${RNFS.DocumentDirectoryPath}/react.jpg`}</Text>
        </View>
        ) : null;
        return (
          <View>
            <Text onPress={this.onDownloadImagePress}>Download Image</Text>
            {preview}
          </View>
        );
    }
}
AppRegistry.registerComponent('downloadFile', () => downloadFile);*/