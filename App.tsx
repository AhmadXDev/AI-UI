/**
 * Flash Cards App
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FlashCardsScreen } from './src/screens';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <FlashCardsScreen />
    </SafeAreaProvider>
  );
}

export default App;
