import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigator/MainNavigator';

function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
