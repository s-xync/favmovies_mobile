import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';
import MovieTile from '../../components/MovieTile';

class Favourites extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Favourites Screen</Text>
        <MovieTile />
      </SafeAreaView>
    );
  }
}

export default Favourites;
