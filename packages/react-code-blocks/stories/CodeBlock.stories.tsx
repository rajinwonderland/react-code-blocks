import React from 'react';
import { CodeBlock, dracula } from '../src';

export default {
  title: 'Code Block',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => (
  <CodeBlock
    text={"const foo = 'bar';"}
    language="javascript"
    theme={dracula}
    showLineNumbers
    wrapLines
  />
);
