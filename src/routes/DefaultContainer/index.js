import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '../../components/Header';
import GenresScreen from '../../pages/GenresScreen';
import HomeScreen from '../../pages/HomeScreen';
import CategoryDetailScreen from '../../pages/CategoryDetailScreen';
import PerfilScreen from '../../pages/PerfilScreen';

const Stack = createStackNavigator();

function DefaultContainer() {
  return (
    <>
      <Header />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen component={HomeScreen} name='HomeScreen' />
        <Stack.Screen component={CategoryDetailScreen} name='CategoryDetailScreen' />
        <Stack.Screen component={PerfilScreen} name='PerfilScreen' />
        <Stack.Screen component={GenresScreen} name='GenresScreen' />
      </Stack.Navigator>
    </>
  );
}

export default DefaultContainer;