/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { UI4Screen } from '../src/screens/UI4Screen';

test('UI4Screen renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<UI4Screen />);
  });
});