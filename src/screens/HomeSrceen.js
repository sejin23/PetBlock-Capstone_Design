import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class HomeScreen extends Component<Props> {
    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize:15}}>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white'
    }
});