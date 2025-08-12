/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('AI-UI App', () => {
  test('renders correctly', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<App />);
    });
  });

  test('contains main title', async () => {
    let instance: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(() => {
      instance = ReactTestRenderer.create(<App />);
    });
    const root = instance!.root;
    const titleElements = root.findAllByProps({children: 'AI-UI Framework'});
    expect(titleElements.length).toBeGreaterThanOrEqual(1);
  });

  test('contains welcome card', async () => {
    let instance: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(() => {
      instance = ReactTestRenderer.create(<App />);
    });
    const root = instance!.root;
    const welcomeElements = root.findAllByProps({children: 'Welcome to AI-UI'});
    expect(welcomeElements.length).toBeGreaterThanOrEqual(1);
  });

  test('contains framework features section', async () => {
    let instance: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(() => {
      instance = ReactTestRenderer.create(<App />);
    });
    const root = instance!.root;
    const featureElements = root.findAllByProps({children: 'Framework Features'});
    expect(featureElements.length).toBeGreaterThanOrEqual(1);
  });
});
