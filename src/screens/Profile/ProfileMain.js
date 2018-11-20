import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';

export default class ProfileMain extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Icon name="user-circle" style={{paddingBottom: 15}} size={48} />
                <View style={Styles.lowButton}>
                    <View style={Styles.custombtn}>
                    </View>
                    <View style={Styles.custombtn}>
                    </View>
                </View>
            </View>
        );
    }
}