import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';

import MovieTile from '../../components/MovieTile';
import ActivityIndicatorView from '../../components/ActivityIndicatorView';

class NowPlaying extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicatorView loading={this.props.moviesLoading}>
          <FlatList
            data={this.props.nowPlaying}
            keyExtractor={item => `${item.id}`}
            renderItem={({item: movie}) => (
              <MovieTile key={movie.id} movie={movie} />
            )}
          />
        </ActivityIndicatorView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({movies}) => ({
  moviesLoading: movies.moviesLoading,
  nowPlaying: movies.nowPlaying,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NowPlaying);
