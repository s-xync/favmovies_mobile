import {SET_NOW_PLAYING_MOVIES, SET_MOVIES_LOADING} from '../types';

const initialState = {
  moviesLoading: false,
  nowPlaying: [],
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
    default: {
      return state;
    }
  }
};
