import {} from '../types';
import constants from '../../config/constants';
import makeApiRequest from '../../utils/makeApiRequest';
import {errorAlert} from '../../utils/tinyUtils';

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

  console.log(nowPlayingMoviesResponse.response);
};
