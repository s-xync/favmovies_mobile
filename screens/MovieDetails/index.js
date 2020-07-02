import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import ActivityIndicatorView from '../../components/ActivityIndicatorView';

class MovieDetails extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicatorView
          loading={this.props.moviesLoading}
          loadingType="details">
          <View style={styles.nothingTextContainer}>
            <Text style={styles.nothingText}>Nothing to show here.</Text>
          </View>
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
  selectedMovieDetails: movies.selectedMovieDetails,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetails);
