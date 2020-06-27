import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes, rootStackNavigatorRoutes} from './routes';

const Stack = createStackNavigator();

class RootStackNavigator extends Component {
  stackRouteRender = route => (
    <Stack.Screen
      key={route}
      name={routes[route].routeName}
      component={routes[route].component}
    />
  );

  render() {
    return (
      <Stack.Navigator initialRouteName="Movies" headerMode="none">
        {rootStackNavigatorRoutes.map(this.stackRouteRender)}
      </Stack.Navigator>
    );
  }
}

export default RootStackNavigator;
