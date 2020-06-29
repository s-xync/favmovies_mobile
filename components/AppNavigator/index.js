import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import RootStackNavigator from './RootStackNavigator';
import {
  getNowPlaying,
  setMoviesLoading,
  readFavoriteMoviesFromStorage,
} from '../../store/actions/moviesActions';

class AppNavigator extends Component {
  async componentDidMount() {
    this.props.setMoviesLoading(true);
    // get now playing movies from tmdb api
    await Promise.all([
      this.props.getNowPlaying(),
      this.props.readFavoriteMoviesFromStorage(),
    ]);
    this.props.setMoviesLoading(false);
  }

  render() {
    return (
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    );
  }
}

const mapStateToProps = ({movies}) => ({});

const mapDispatchToProps = dispatch => ({
  setMoviesLoading: moviesLoading => dispatch(setMoviesLoading(moviesLoading)),
  getNowPlaying: () => dispatch(getNowPlaying()),
  readFavoriteMoviesFromStorage: () =>
    dispatch(readFavoriteMoviesFromStorage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppNavigator);
