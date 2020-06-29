import AsyncStorage from '@react-native-community/async-storage';

import {SET_NOW_PLAYING_MOVIES, SET_MOVIES_LOADING} from '../types';
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

  // await AsyncStorage.setItem(
  //   'now-playing-movies',
  //   JSON.stringify(nowPlayingMovies),
  // );
};
