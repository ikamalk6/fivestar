import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/reducer/store';
import NavigationScreen from './src/router/index';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationScreen />
    </Provider>
  );
}
