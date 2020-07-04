import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../pages/LoginScreen';
import RegisterScreen from '../../pages/RegisterScreen';
import EditPasswordScreen from '../../pages/EditPasswordScreen';

const Stack = createStackNavigator();

function AuthContainer() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={LoginScreen} name='LoginScreen' />
        <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
        <Stack.Screen component={EditPasswordScreen} name='EditPasswordScreen' />
      </Stack.Navigator>
    </>
  );
}

export default AuthContainer;