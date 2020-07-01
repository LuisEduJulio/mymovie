import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../pages/Home';

const Stack = createStackNavigator();

function DefaultContainer() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={Home} name='Home' />
      </Stack.Navigator>
    </>
  );
}

export default DefaultContainer;