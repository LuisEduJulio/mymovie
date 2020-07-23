import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Index from './src';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
          <NavigationContainer>
            <Index />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </>
  );
}