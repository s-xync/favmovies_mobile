import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import MovieTile from '../../components/MovieTile';
import ActivityIndicatorView from '../../components/ActivityIndicatorView';
import {routes} from '../../components/AppNavigator/routes';

class NowPlaying extends Component {
  onSwipeLeft = () => {
    this.props.navigation.navigate(routes.favorites.routeName);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicatorView loading={this.props.moviesLoading}>
          <GestureRecognizer style={{flex: 1}} onSwipeLeft={this.onSwipeLeft}>
            {this.props.nowPlaying.length === 0 ? (
              <View style={styles.nothingTextContainer}>
                <Text style={styles.nothingText}>Nothing to show here.</Text>
              </View>
            ) : (
              <FlatList
                data={this.props.nowPlaying}
                keyExtractor={item => `${item.id}`}
                renderItem={({item: movie}) => (
                  <MovieTile key={movie.id} movie={movie} />
                )}
              />
            )}
          </GestureRecognizer>
        </ActivityIndicatorView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nothingTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nothingText: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.7)',
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
