/**
 * AI-UI Search Interface
 * A React Native search interface created from screenshot
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchScreen } from './src/screens/SearchScreen';

function App() {
  return (
    <SafeAreaProvider>
      <SearchScreen />
    </SafeAreaProvider>
  );
}

export default App;
