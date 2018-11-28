import React from 'react';
//import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
//import Icon from 'react-native-vector-icons/Ionicons';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../pages/HomeStack';
import SettingsScreen from '../pages/Settings';
import TagsScreen from '../pages/MyTags';
import NewTagScreen from '../pages/NewTag';


const HomeStack = HomeScreen;

const myHomeIcon = ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'}
    />)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: myHomeIcon
};

const TagStack = TagsScreen;

const myTagIcon = ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-link'}
    />)

TagStack.navigationOptions = {
  tabBarLabel: 'My Tags',
  tabBarIcon:  myTagIcon
  
};

const SettingsStack =  SettingsScreen;

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-options'
    />
  ),
};

const NewTagStack =  NewTagScreen;

NewTagStack.navigationOptions = {
  tabBarVisible: false,
  
};

export default createBottomTabNavigator({
    TagStack,
    HomeStack,
    SettingsStack
});
