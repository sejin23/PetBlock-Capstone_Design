import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {};
export default class HomeScreen extends Component<Props> {
    _login = () => {
        this.props.navigation.navigate('Login');
    };
    render() {
        return(
            <View style={styles.container}>
                <Button title="pull the etherscan" onPress={this._login}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'grey'
    },
    title: {
        flex: 1
    },
    content: {
        flex: 1
    },
    footer: {
        flex: 1
    },
    tabbar: {
        flex: 1
    }
});