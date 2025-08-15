/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { FlashCardsScreen } from '../src/screens';

test('FlashCardsScreen renders correctly', async () => {
  let component: ReactTestRenderer.ReactTestRenderer;
  
  await ReactTestRenderer.act(() => {
    component = ReactTestRenderer.create(<FlashCardsScreen />);
  });

  expect(component.toJSON()).toBeTruthy();
});

test('FlashCardsScreen contains expected elements', async () => {
  let component: ReactTestRenderer.ReactTestRenderer;
  
  await ReactTestRenderer.act(() => {
    component = ReactTestRenderer.create(<FlashCardsScreen />);
  });

  const tree = component!.toJSON();
  const treeText = JSON.stringify(tree);
  
  // Check for key elements in the UI
  expect(treeText).toContain('FLASH CARDS');
  expect(treeText).toContain('English - Spanish 1');
  expect(treeText).toContain('0');
  expect(treeText).toContain('%');
  expect(treeText).toContain('Add deck');
});