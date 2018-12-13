import React, {Component} from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Styles from '../styles';

export default class Petinfoscreen extends Component{
    nextActivity = () => {
        this.props.navigation.navigate('Diagnosis');
    }
    render() {
        return (
            <View style={Styles.infocontainer}>
                <View style={{flex: 11}}>
                    <Image style={{width: '100%', height: '100%'}} source={require('../image/petinfo.png')} />
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableOpacity style={Styles.ellipticButton} onPress={this.nextActivity} >
                        <Text style={{color: '#CDDDF1'}}>more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}