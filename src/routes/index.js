import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContainer from './AuthContainer';
import DefaultContainer from './DefaultContainer';


const Stack = createStackNavigator();

function Routes() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={AuthContainer} name='AuthContainer' />
        <Stack.Screen component={DefaultContainer} name='DefaultContainer' />
      </Stack.Navigator>
    </>
  );
}

export default Routes;