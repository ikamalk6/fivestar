import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './src/reducer/store';

import NavigationScreen from './src/router/index';
persistor;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationScreen />
      </PersistGate>
    </Provider>
  );
}
