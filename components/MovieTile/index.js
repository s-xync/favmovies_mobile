import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routes} from '../AppNavigator/routes';

const MovieTile = () => {
  const navigation = useNavigation();

  const movieDetailsHandler = () => {
    navigation.navigate(routes.movieDetails.routeName);
  };

  return (
    <TouchableOpacity onPress={movieDetailsHandler}>
      <Text>Go To Movie Details</Text>
    </TouchableOpacity>
  );
};

export default MovieTile;
