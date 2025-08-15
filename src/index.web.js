import React from 'react';
import { AppRegistry } from 'react-native';
import App from '../App';

// Register the app for web
AppRegistry.registerComponent('tempapp', () => App);

// Start the app
AppRegistry.runApplication('tempapp', {
  rootTag: document.getElementById('react-native-web')
});

export default App;