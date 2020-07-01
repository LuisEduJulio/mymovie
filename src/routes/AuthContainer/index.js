import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../pages/Login';

const Stack = createStackNavigator();

function AuthContainer() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={Login} name='Login' />
      </Stack.Navigator>
    </>
  );
}

export default AuthContainer;