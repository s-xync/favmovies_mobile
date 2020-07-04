import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import store from './store';

import AppNavigator from './components/AppNavigator/AppNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
