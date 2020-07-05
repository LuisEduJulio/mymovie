import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import AuthContainer from './AuthContainer';
import DefaultContainer from './DefaultContainer';

const Stack = createStackNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={AuthContainer} name='AuthContainer' />
      </Stack.Navigator>
    </>
  ) : (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={DefaultContainer} name='DefaultContainer' />
      </Stack.Navigator>
    );
}
