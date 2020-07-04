import React from 'react';
import {FlatList} from 'react-native';

import MovieTile from '../../components/MovieTile';

const MovieList = ({movies}) => (
  <FlatList
    showsVerticalScrollIndicator={false}
    data={movies}
    keyExtractor={item => `${item.id}`}
    renderItem={({item: movie}) => <MovieTile key={movie.id} movie={movie} />}
  />
);

export default MovieList;
