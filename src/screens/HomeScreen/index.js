import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MemoryScreen from './Memory';
import CPUScreen from './CPU';

const SettingsTabs = createBottomTabNavigator({
    Home: {
        screen: CPUScreen,
        navigationOptions: {
            title: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={17} color={ tintColor } />
            )
        }
    },
    Memory: {
        screen: MemoryScreen,
        navigationOptions: {
            tabBarLabel: "List",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="github" size={17} color={ tintColor } />
            )
        }
    }
});

export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });