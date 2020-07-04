import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';

import MovieTile from '../../components/MovieTile/MovieTile';
import CastList from '../../components/CastList/CastList';

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

    return (
      <View style={styles.castSection}>
        <Text style={styles.castHeading}>{heading}</Text>
        {moviesLoading ? (
          <ContentLoader backgroundColor="#CCC" style={{height: 200}}>
            <Rect x="0%" y="0" rx="5" ry="5" width="30%" height="125" />
            <Rect x="35%" y="0" rx="5" ry="5" width="30%" height="125" />
            <Rect x="70%" y="0" rx="5" ry="5" width="30%" height="125" />
            <Rect x="0%" y="135" rx="5" ry="5" width="100%" height="20" />
            <Rect x="0%" y="165" rx="5" ry="5" width="100%" height="20" />
          </ContentLoader>
        ) : (
          <CastList castDetails={castDetails} />
        )}
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
