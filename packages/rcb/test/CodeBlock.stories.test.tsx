import React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomStyles as CodeBlock } from '../stories/CodeBlock.stories';

describe('CodeBlock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CodeBlock />, div);
  });
});
