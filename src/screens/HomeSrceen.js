import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

type Props = {};
export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        //headerLeft: <Image source={require('../image/search_icon.png') style={styles.headIcon}}/>,
        title: 'Home',
        //headerRight: <Image source={require('../image/setting_icon.png')} style={styles.headIcon}/>,
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{flex:1}}>Hello</Text>
                    <Text style={{flex:3}}>My neighbor</Text>
                    <Text style={{flex:1}}>setting</Text>
                </View>
                <View style={styles.content}>
                </View>
                <View style={styles.footer}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: 'skyblue'
    },
    content: {
        flex: 1        
    },
    footer: {
        width: '100%',
        height: 50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: 'steelblue'
    },
    headIcon: {
        width: 40,
        height: 40
    }
});