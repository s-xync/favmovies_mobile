import {
  TMDB_API_KEY,
  TMDB_MOVIE_API_URL,
  TMDB_IMAGES_API_URL,
} from 'react-native-dotenv';

const defaultConfig = {
  tmdbApiKey: TMDB_API_KEY,
  tmdbMovieApi: TMDB_MOVIE_API_URL,
  tmdbImagesApi: TMDB_IMAGES_API_URL,
};

export default {
  ...defaultConfig,
};
