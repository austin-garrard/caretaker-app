import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './App/views/Login/';
import HomeScreen from './App/views/Home/';

const caretaker = StackNavigator({
    Login: { screen: Login },
    Home: { screen: HomeScreen }
});

AppRegistry.registerComponent('caretaker', () => caretaker);
