import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Code } from '../stories/Code.stories';

describe('Code', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Code />, div);
  });
});
