import React, { useState } from 'react';
import { DashboardScreen, DemoMenuScreen } from '../screens';

export const AppNavigator: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'menu' | 'dashboard'>('menu');

  const navigateToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  switch (currentScreen) {
    case 'dashboard':
      return <DashboardScreen />;
    case 'menu':
    default:
      return <DemoMenuScreen onNavigateToDashboard={navigateToDashboard} />;
  }
};