import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../../styles';

export default class MemoryHome extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Memory",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />    
            </TouchableOpacity>
        ),
    });
    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }
    renderItem = ({item}) => {
        return(
            <View>
                <Image style={{width: 100, height: 100}}
                    source={{uri: item.image}} />
                <View>
                    <Text>{item.book_title}</Text>
                    <Text>{item.author}</Text>
                </View>
            </View>
        )
    }
    componentDidMount() {
        const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.book_array
            })
        })
        .catch((error) => {
            console.log("error is : "+error)
        })
    }
    render() {
        return (
            <View style={Styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}