import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Lista from './Lista';
import Detalhes from './Detalhes';

const MainStackNavigator = createStackNavigator(
  {
    Lista: {
      screen: Lista,
    },
    Detalhes: {
      screen: Detalhes,
    },
  },
  {
    initialRouteName: 'Lista',
    headerMode: "none",
  }
);

export default MainStackNavigator;
