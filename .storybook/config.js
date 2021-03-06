import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { withKnobs } from '@storybook/addon-knobs';

import '../src/css/defaults.css';
import '../src/css/typography.css';

const req = require.context('../src/components', true, /\.stories\.jsx?$/);

const BackgroundDecorator = (story) => (
  <div style={{ backgroundColor: 'darkorange', height: '100vh' }}>
    {story()}
  </div>
);

const mockStore = createStore((state) => state, { router: {} });

const ReduxDecorator = (story) => (
  <Provider store={mockStore}>
    {story()}
  </Provider>
);

addDecorator(BackgroundDecorator);
addDecorator(ReduxDecorator);
addDecorator(withKnobs)

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
