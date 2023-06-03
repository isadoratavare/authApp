import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppRouter from './src/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}

export default App;
