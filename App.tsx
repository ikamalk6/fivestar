import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/reducer/store';
import NavigationScreen from './src/router/index';
import ValidateOtp from './src/screens/validateOtp';

export default function App() {
  return (
    <Provider store={Store}>
      {/* <ValidateOtp /> */}
      <NavigationScreen />
    </Provider>
  );
}
