import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {routes} from '../AppNavigator/routes';

const MovieTile = ({movie}) => {
  const navigation = useNavigation();

  const movieDetailsHandler = () => {
    navigation.navigate(routes.movieDetails.routeName);
  };

  return (
    <TouchableOpacity onPress={movieDetailsHandler} style={{padding: 10}}>
      <TouchableOpacity>
        <MaterialIcons name="favorite-border" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({movies}) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieTile);
