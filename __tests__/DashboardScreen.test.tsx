/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { DashboardScreen } from '../src/screens/DashboardScreen';

test('DashboardScreen renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<DashboardScreen />);
  });
});