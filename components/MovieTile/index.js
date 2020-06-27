import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {routes} from '../AppNavigator/routes';
import {getNowPlaying} from '../../store/actions/moviesActions';

const MovieTile = props => {
  const navigation = useNavigation();

  const movieDetailsHandler = () => {
    navigation.navigate(routes.movieDetails.routeName);
    props.getNowPlaying();
  };

  return (
    <TouchableOpacity onPress={movieDetailsHandler}>
      <Text>Go To Movie Details</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({movies}) => ({});

const mapDispatchToProps = dispatch => ({
  getNowPlaying: () => dispatch(getNowPlaying()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieTile);
