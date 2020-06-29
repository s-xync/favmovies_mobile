import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const ActivityIndicatorView = ({loading, children}) => (
  <View style={styles.container} pointerEvents={loading ? 'none' : 'auto'}>
    {loading && (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    )}
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});

export default ActivityIndicatorView;
