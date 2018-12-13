import React, {Component} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from '../styles';

export default class Diagscreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            files: [],
        }
    }
    downloadfile = () => {
        
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
                for(let i=0; i<responseJson.file_list.length; i++){
                    this.setState({
                        files: [
                            ...this.state.files,
                            responseJson.file_list[i]
                        ]
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
                    <Text onPress={this.downloadfile}>{item}</Text>
                </View>
            )
        });
        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={this.downloadlist}>
                        <Image source={require('../image/head.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 6, backgroundColor: '#A0C4C5'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        {filelist}
                    </View>
                </View>
            </View>
        )
    }
}

//