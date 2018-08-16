import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import SampleView from './components/SampleView';
import ScrollerView from './components/ScrollerView';
import ListView from './components/ListView';
import ImageView from './components/ImageView';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Sample: { screen: SampleView },
  List: { screen: ListView },
  Scroller: { screen: ScrollerView },
  Image: { screen: ImageView },
});

export default App;
