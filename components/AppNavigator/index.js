import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';

class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
