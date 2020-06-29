import MoviesBottomTabNavigator from './MoviesBottomTabNavigator';
import MovieDetails from '../../screens/MovieDetails';
import NowPlaying from '../../screens/NowPlaying';
import Favorites from '../../screens/Favorites';

export const moviesBottomTabNavigatorRoutes = ['nowPlaying', 'favorites'];
export const rootStackNavigatorRoutes = ['movies', 'movieDetails'];

export const routes = {
  movies: {
    routeName: 'Movies',
    component: MoviesBottomTabNavigator,
    label: 'Movies',
  },
  movieDetails: {
    routeName: 'MovieDetails',
    component: MovieDetails,
    label: 'Movie Details',
  },
  nowPlaying: {
    routeName: 'NowPlaying',
    component: NowPlaying,
    label: 'Now Playing',
    iconName: 'ios-film', // ionicons
  },
  favorites: {
    routeName: 'Favorites',
    component: Favorites,
    label: 'Favorites',
    iconName: 'ios-heart', // ionicons
  },
};
