import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import ActivityIndicatorView from '../../components/ActivityIndicatorView/ActivityIndicatorView';
import MovieTile from '../../components/MovieTile/MovieTile';

import constants from '../../config/constants';

class MovieDetails extends Component {
  backdropImage = backdrop_path => (
    <View style={styles.backdropImageContainer}>
      <Image
        source={{uri: `${constants.tmdbImagesApi}${backdrop_path}`}}
        style={styles.backdropImage}
        resizeMode="cover"
      />
    </View>
  );

  castRender = (heading, castDetails) => {
    const {moviesLoading} = this.props;
    if (moviesLoading) {
      return null;
    }
    return (
      <View style={styles.castSection}>
        <Text style={styles.castHeading}>{heading}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={castDetails}
          keyExtractor={item => item.credit_id}
          renderItem={({item: castMember}) => (
            <View style={styles.castCell}>
              <Image
                source={{
                  uri: `${constants.tmdbImagesApi}${castMember.profile_path}`,
                }}
                style={styles.castThumbnail}
                resizeMode="cover"
              />
              <Text style={{fontSize: 16}}>{castMember.name}</Text>
              <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.7)'}}>
                {castMember.character || castMember.job}
              </Text>
            </View>
          )}
        />
      </View>
    );
  };

  render() {
    const {selectedMovieDetails} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, marginBottom: 30}}>
            {selectedMovieDetails.id && (
              <>
                {this.backdropImage(selectedMovieDetails.backdrop_path)}
                <MovieTile
                  movie={selectedMovieDetails}
                  thumbnailClick={false}
                />
              </>
            )}
            {this.castRender('Cast', selectedMovieDetails.cast)}
            {this.castRender('Crew', selectedMovieDetails.crew)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdropImageContainer: {
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  backdropImage: {
    height: '100%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'rgba(77,77,77,0.2)',
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
  castHeading: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.7)',
    marginLeft: 5,
    marginBottom: 10,
  },
  castSection: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
  },
  castCell: {
    width: 125,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  castThumbnail: {
    borderRadius: 10,
    height: '65%',
    backgroundColor: 'rgba(77,77,77,0.2)',
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
