import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {};
export default class HomeScreen extends Component<Props> {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Hello?</Text>
                <TextInput style={styles.content}/>
                <Text style={styles.footer}>Hello?</Text>
                <Text style={styles.tapbar}>Hello?</Text>
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
    tapbar: {
        flex: 1
    }
});