import React, {Component} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomButton extends Component<Props> {
    static defaultProps = {
        title: 'untitled',
        buttonColor: '#000',
        titlecolor: '#fff',
        onPress: () => null
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity style={[
                styles.button,
                {backgroundColor: this.props.buttonColor}
            ]} onPress={this.props.onPress}>
                <Text style={[
                    styles.title,
                    {color: this.props.titlecolor}
                ]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20
    },
    title: {
        fontSize: 15
    }
});
