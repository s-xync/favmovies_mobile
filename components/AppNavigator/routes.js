import MoviesBottomTabNavigator from './MoviesBottomTabNavigator';
import MovieDetails from '../../screens/MovieDetails';
import NowPlaying from '../../screens/NowPlaying';
import Favourites from '../../screens/Favourites';

export const moviesBottomTabNavigatorRoutes = ['nowPlaying', 'favourites'];
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
  favourites: {
    routeName: 'Favourites',
    component: Favourites,
    label: 'Favourites',
    iconName: 'ios-heart', // ionicons
  },
};
