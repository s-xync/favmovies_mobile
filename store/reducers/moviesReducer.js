import {
  SET_NOW_PLAYING_MOVIES,
  SET_MOVIES_LOADING,
  SET_FAVORITE_MOVIES,
} from '../types';

const initialState = {
  moviesLoading: false,
  nowPlaying: [],
  favorites: [],
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
    default: {
      return state;
    }
  }
};
