import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '../../components/Header';
import Home from '../../pages/Home';
import CategoryDetail from '../../pages/CategoryDetail';
import Perfil from '../../pages/Perfil';
import GenresScreen from '../../pages/GenresScreen';

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
        <Stack.Screen component={Home} name='Home' />
        <Stack.Screen component={CategoryDetail} name='CategoryDetail' />
        <Stack.Screen component={Perfil} name='Perfil' />
        <Stack.Screen component={GenresScreen} name='GenresScreen' />
      </Stack.Navigator>
    </>
  );
}

export default DefaultContainer;