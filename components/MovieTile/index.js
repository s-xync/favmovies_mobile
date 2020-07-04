import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import dayjs from 'dayjs';
import _ from 'lodash';

import {routes} from '../AppNavigator/routes';
import constants from '../../config/constants';
import {
  addFavoriteMovie,
  setMoviesLoading,
  getSelectedMovieDetails,
} from '../../store/actions/moviesActions';

const MovieTile = props => {
  const {movie, favorites, thumbnailClick = true} = props;

  const navigation = useNavigation();

  const movieDetailsHandler = async () => {
    if (!thumbnailClick) {
      return;
    }
    props.setMoviesLoading(true);
    navigation.navigate(routes.movieDetails.routeName);
    await props.getSelectedMovieDetails(movie.id);
    props.setMoviesLoading(false);
  };

  const favoriteMovie = _.find(favorites, m => m.id === movie.id);

  return (
    <View style={styles.containerShadow}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => props.addFavoriteMovie(movie.id)}>
          {favoriteMovie ? (
            <MaterialIcons name="favorite" color="red" size={30} />
          ) : (
            <MaterialIcons name="favorite-border" color="red" size={30} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.thumbnail}
          onPress={movieDetailsHandler}>
          <Image
            source={{uri: `${constants.tmdbImagesApi}${movie.poster_path}`}}
            style={styles.thumbnailImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text
            style={[
              styles.textStyle,
              {
                fontSize: 18,
                width: '85%',
              },
            ]}>
            {movie.original_title}
          </Text>
          <Text
            style={[
              styles.textStyle,
              {
                fontSize: 14,
              },
            ]}>
            {movie.overview}
          </Text>

          <Text
            style={[
              styles.textStyle,
              {
                fontSize: 16,
              },
            ]}>
            {dayjs(movie.release_date, 'YYYY-MM-DD').format('DD MMMM YYYY')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerShadow: {
    marginVertical: 7,
    marginHorizontal: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  favoriteButton: {
    position: 'absolute',
    right: 0,
    padding: 10,
    zIndex: 1,
  },
  textStyle: {
    color: 'rgba(0,0,0,0.7)',
    marginVertical: 3,
  },
  thumbnail: {
    flex: 1,
    marginHorizontal: 5,
  },
  thumbnailImage: {
    height: 180,
    borderRadius: 10,
    backgroundColor: 'rgba(77,77,77,0.2)',
  },
  detailsContainer: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});

const mapStateToProps = ({movies}) => ({
  favorites: movies.favorites,
});

const mapDispatchToProps = dispatch => ({
  addFavoriteMovie: movieId => dispatch(addFavoriteMovie(movieId)),
  setMoviesLoading: moviesLoading => dispatch(setMoviesLoading(moviesLoading)),
  getSelectedMovieDetails: movieId =>
    dispatch(getSelectedMovieDetails(movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieTile);
