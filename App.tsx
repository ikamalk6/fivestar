import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Reducer/store';
import Navigation from './src/Router/Navigation';
import LoginScreen from './src/Screens/Login/LoginScreen';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
      {/* <LoginScreen /> */}
    </Provider>
  );
}