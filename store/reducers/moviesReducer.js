import {
  SET_NOW_PLAYING_MOVIES,
  SET_MOVIES_LOADING,
  SET_FAVORITE_MOVIES,
  SET_SELECTED_MOVIE_DETAILS,
  SET_CAST_AND_CREW_DETAILS,
} from '../types';

const initialState = {
  moviesLoading: false,
  nowPlaying: [],
  favorites: [],
  selectedMovieDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NOW_PLAYING_MOVIES: {
      return {
        ...state,
        nowPlaying: action.payload,
      };
    }
    case SET_MOVIES_LOADING: {
      return {
        ...state,
        moviesLoading: action.payload,
      };
    }
    case SET_FAVORITE_MOVIES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }
    case SET_SELECTED_MOVIE_DETAILS: {
      return {
        ...state,
        selectedMovieDetails: {
          ...state.selectedMovieDetails,
          ...action.payload,
        },
      };
    }
    case SET_CAST_AND_CREW_DETAILS: {
      return {
        ...state,
        selectedMovieDetails: {
          ...state.selectedMovieDetails,
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
