/**
 * AI UI App
 * React Native AI Interface Demo
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AIChatScreen } from './src/screens';
import { colors } from './src/styles/colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={colors.background}
      />
      <AIChatScreen />
    </SafeAreaProvider>
  );
}

export default App;
