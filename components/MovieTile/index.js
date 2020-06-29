import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import dayjs from 'dayjs';
import _ from 'lodash';

import {routes} from '../AppNavigator/routes';
import constants from '../../config/constants';
import {addFavoriteMovie} from '../../store/actions/moviesActions';

const MovieTile = props => {
  const {movie, favorites} = props;

  const navigation = useNavigation();

  const movieDetailsHandler = () => {
    navigation.navigate(routes.movieDetails.routeName);
  };

  const favoriteMovie = _.find(favorites, m => m.id === movie.id);

  return (
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

      <TouchableOpacity style={styles.thumbnail} onPress={movieDetailsHandler}>
        <Image
          source={{uri: `${constants.tmdbImagesApi}${movie.poster_path}`}}
          style={{
            height: 180,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <Text
          style={[
            styles.textStyle,
            {
              fontSize: 20,
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
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 10,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieTile);
