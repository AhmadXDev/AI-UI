/**
 * AI-UI App - UI-4 Implementation
 * https://github.com/AhmadXDev/AI-UI
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UI4Screen } from './src/screens';

function App() {
  return (
    <SafeAreaProvider>
      <UI4Screen />
    </SafeAreaProvider>
  );
}

export default App;
