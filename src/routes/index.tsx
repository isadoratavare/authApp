import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

function AppRouter(): JSX.Element {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
export default AppRouter;
