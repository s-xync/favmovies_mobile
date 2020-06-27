import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';
import MovieTile from '../../components/MovieTile';

class NowPlaying extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>NowPlaying Screen</Text>
        <MovieTile />
      </SafeAreaView>
    );
  }
}

export default NowPlaying;
