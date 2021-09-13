import React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomStyles as CopyBlock } from '../stories/CopyBlock.stories';

describe('CopyBlock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CopyBlock />, div);
  });
});
