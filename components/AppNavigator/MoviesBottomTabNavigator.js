import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {routes, moviesBottomTabNavigatorRoutes} from './routes';

const Tab = createBottomTabNavigator();

class MoviesBottomTabNavigator extends Component {
  tabBarIconRender = route => (
    <Tab.Screen
      key={route}
      name={routes[route].routeName}
      component={routes[route].component}
      options={{
        tabBarLabel: routes[route].label,
        tabBarIcon: ({color, size}) => (
          <IonIcons name={routes[route].iconName} color={color} size={size} />
        ),
      }}
    />
  );

  render() {
    return (
      <Tab.Navigator
        initialRouteName={routes.nowPlaying.routeName}
        backBehavior="none"
        screenOptions={{
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        tabBarOptions={{
          activeTintColor: 'red',
          allowFontScaling: false,
        }}>
        {moviesBottomTabNavigatorRoutes.map(this.tabBarIconRender)}
      </Tab.Navigator>
    );
  }
}

export default MoviesBottomTabNavigator;
