import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </>
  );
};

export default App;
