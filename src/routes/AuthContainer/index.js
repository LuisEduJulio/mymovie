import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../pages/Login';
import Register from '../../pages/Register';
import EditPassword from '../../pages/EditPassword';

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
        <Stack.Screen component={Register} name='Register' />
        <Stack.Screen component={EditPassword} name='EditPassword' />
      </Stack.Navigator>
    </>
  );
}

export default AuthContainer;