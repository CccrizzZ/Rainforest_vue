import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Myplants from '../screens/Myplants';
import Overview from '../screens/Overview';
import Myrecipe from '../screens/Myrecipe';

const MyplantsStack = createStackNavigator({
  Home: Myplants,
});

MyplantsStack.navigationOptions = {
  tabBarLabel: 'My Plants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-leaf${focused ? '' : '-outline'}`
          : 'ios-leaf'
      }
    />
  ),
};

const OverviewStack = createStackNavigator({
  Links: Overview,
});

OverviewStack.navigationOptions = {
  tabBarLabel: 'Overview',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-pie' : 'ios-pie'}
    />
  ),
};

const MyrecipeStack = createStackNavigator({
  Settings: Myrecipe,
});

MyrecipeStack.navigationOptions = {
  tabBarLabel: 'My Recipe',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-flask' : 'ios-flask'}
    />
  ),
};


export default createBottomTabNavigator({
  MyplantsStack,
  OverviewStack,
  MyrecipeStack,
},{
  tabBarOptions: {
    activeTintColor: '#3cb371',
  },
});

