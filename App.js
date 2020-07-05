import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/index';
import { store } from './src/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
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