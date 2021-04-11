import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Header from '../components/Header';

import Home from './Home';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Header />
      <Home />
    </NavigationContainer>
  );
};

export default Routes;
