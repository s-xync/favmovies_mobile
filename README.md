# FavMovies

### You can access apk for this project [here](https://github.com/s-xync/favmovies_mobile/releases/tag/v0.1-alpha).

### You can access the web version of this project [here](https://github.com/s-xync/favmovies).

### You can access the live version of the web project [here](https://favmovies.surge.sh/).

With this app, you can view the list of movies that are playing now in theatres. You can also favorite and unfavorite the movies. All your favorite movies can be viewed in a separate tab. You can also view full details of a movie including cast and crew.

The app uses React Native / Redux for the front-end.
The app uses AsyncStorage to persist the user favorites.
This app uses [The Movie DB](https://www.themoviedb.org) API.

---

To use this app locally, first clone the repository and create `.env` file.
Go to [The Movie DB](https://www.themoviedb.org) and create an account to get the API key.
Copy the following details into the file.
```
TMDB_API_KEY=<YOUR_TMDB_API_KEY>
TMDB_MOVIE_API_URL=https://api.themoviedb.org/3/movie
TMDB_IMAGES_API_URL=https://image.tmdb.org/t/p/original
```
Then run the follwing commands. For Android, `yarn install` and `yarn android`. For iOS, `yarn install` and `yarn pod-install` and `yarn ios`.

If everything goes well, you should able to access the app on your emulator/simulator.

### You can access apk for this project [here](https://github.com/s-xync/favmovies_mobile/releases/tag/v0.1-alpha).

### You can access the web version of this project [here](https://github.com/s-xync/favmovies).

### You can access the live version of the web project [here](https://favmovies.surge.sh/).

#### Thanks!!
