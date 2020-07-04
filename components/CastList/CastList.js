import React from 'react';
import {FlatList, View, Text, Image, StyleSheet} from 'react-native';

import constants from '../../config/constants';

const CastList = ({castDetails}) => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={castDetails}
    keyExtractor={item => item.credit_id}
    renderItem={({item: castMember}) => (
      <View style={styles.castCell}>
        <Image
          source={{
            uri: `${constants.tmdbImagesApi}${castMember.profile_path}`,
          }}
          style={styles.castThumbnail}
          resizeMode="cover"
        />
        <Text style={{fontSize: 16}}>{castMember.name}</Text>
        <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.7)'}}>
          {castMember.character || castMember.job}
        </Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  castCell: {
    width: 125,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  castThumbnail: {
    borderRadius: 10,
    height: '65%',
    backgroundColor: 'rgba(77,77,77,0.2)',
  },
});

export default CastList;
