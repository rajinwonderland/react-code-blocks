import React from 'react';
import { Code } from '../src';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { supportedLanguages, themeObj } from '../utils/knobs';
import he from 'he';

export default {
  title: 'Code',
  decorators: [withKnobs],
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => {
  const language = select(
    'language',
    Object.assign({}, ...supportedLanguages.map(val => ({ [val]: val }))),
    'javascript'
  );
  //@ts-ignore
  const themes = select('theme', themeObj, 'dracula');
  const code = text('text', `const add = (x,y) => x+y;`);

  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <Code
        text={he.decode(code)}
        language={language}
        theme={require('../src')[themes]}
        wrapLines
      />
    </div>
  );
};
