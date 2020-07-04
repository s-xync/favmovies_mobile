import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';

const cardLoader = () => (
  <ContentLoader backgroundColor="#CCC" style={{flex: 1}}>
    {Array(5)
      .fill(1)
      .map((x, index) => (
        <Fragment key={index}>
          <Rect
            x="5%"
            y={`${15 + index * 215}`}
            rx="5"
            ry="5"
            width="30%"
            height="200"
          />
          <Rect
            x="40%"
            y={`${15 + index * 215}`}
            rx="5"
            ry="5"
            width="50%"
            height="20"
          />
          <Rect
            x="40%"
            y={`${50 + index * 215}`}
            rx="5"
            ry="5"
            width="42%"
            height="20"
          />
          <Rect
            x="40%"
            y={`${85 + index * 215}`}
            rx="5"
            ry="5"
            width="35%"
            height="20"
          />
        </Fragment>
      ))}
  </ContentLoader>
);

const ActivityIndicatorView = ({loading, children}) => (
  <View style={styles.container} pointerEvents={loading ? 'none' : 'auto'}>
    {cardLoader()}
    {!loading && children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ActivityIndicatorView;
