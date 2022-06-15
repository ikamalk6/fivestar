import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/Reducer/store';
import Navigation from './src/Router/Navigation';
import ChoicePage from './src/Screens/choicePage';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}
