import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import { TabBarIconAnt, TabBarIconIonic } from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from "../screens/AccountScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Главная',
    tabBarIcon: ({focused}) => (
        <TabBarIconIonic
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home`
                    : 'md-home'
            }
        />
    ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Задания',
    tabBarIcon: ({focused}) => (
        <TabBarIconIonic focused={focused} name={Platform.OS === 'ios' ? 'ios-checkmark-circle-outline' : 'md-checkmark-circle-outline'}/>
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Чат',
    tabBarIcon: ({focused}) => (
        <TabBarIconIonic focused={focused} name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}/>
    ),
};

SettingsStack.path = '';

const AccountStack = createStackNavigator(
    {
        Account: AccountScreen,
    },
    config
);

AccountStack.navigationOptions = {
    tabBarLabel: 'Профиль',
    tabBarIcon: ({focused}) => (
        <TabBarIconIonic focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}/>
    ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
    AccountStack
});

tabNavigator.path = '';

export default tabNavigator;
