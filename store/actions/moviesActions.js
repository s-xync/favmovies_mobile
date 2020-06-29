import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

import {
  SET_NOW_PLAYING_MOVIES,
  SET_MOVIES_LOADING,
  SET_FAVORITE_MOVIES,
} from '../types';
import constants from '../../config/constants';
import makeApiRequest from '../../utils/makeApiRequest';
import {errorAlert} from '../../utils/tinyUtils';

export const setMoviesLoading = (moviesLoading = false) => dispatch => {
  dispatch({
    type: SET_MOVIES_LOADING,
    payload: moviesLoading,
  });
};

export const getNowPlaying = () => async dispatch => {
  const nowPlayingMoviesResponse = await makeApiRequest(
    'GET',
    constants.tmdbMovieApi,
    'now_playing',
    false,
    {
      params: {
        api_key: constants.tmdbApiKey,
      },
    },
  );

  if (nowPlayingMoviesResponse.error) {
    errorAlert(nowPlayingMoviesResponse.message);
  }

  let nowPlayingMovies = nowPlayingMoviesResponse.response.results || [];

  nowPlayingMovies = nowPlayingMovies.map(movie => ({
    id: movie.id,
    original_title: movie.original_title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
  }));

  dispatch({
    type: SET_NOW_PLAYING_MOVIES,
    payload: nowPlayingMovies,
  });
};

export const addFavoriteMovie = movieId => async (dispatch, getState) => {
  const {movies} = getState();
  const {nowPlaying, favorites} = movies;

  let newFavoriteMovies;

  const favoriteMovieFound = _.find(favorites, movie => movie.id === movieId);
  if (favoriteMovieFound) {
    newFavoriteMovies = favorites.filter(movie => movie.id !== movieId);
  } else {
    const movieFound = _.find(nowPlaying, movie => movie.id === movieId);
    if (movieFound) {
      newFavoriteMovies = [...favorites, movieFound];
    }
  }

  dispatch({
    type: SET_FAVORITE_MOVIES,
    payload: newFavoriteMovies,
  });

  await AsyncStorage.setItem(
    'favorite-movies',
    JSON.stringify(newFavoriteMovies),
  );
};

export const readFavoriteMoviesFromStorage = () => async dispatch => {
  const favoriteMoviesStorage = await AsyncStorage.getItem('favorite-movies');
  const favoriteMovies = favoriteMoviesStorage
    ? JSON.parse(favoriteMoviesStorage)
    : [];

  dispatch({
    type: SET_FAVORITE_MOVIES,
    payload: favoriteMovies,
  });
};
