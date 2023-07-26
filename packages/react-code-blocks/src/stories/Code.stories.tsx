import React from 'react';
import { Code, monokai } from '..';
import CodeComponent from '../components/Code';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { supportedLanguages, themeObj } from './utils/knobs';
import he from 'he';
import { a11yLight } from '../themes';

export default {
  title: 'Code',
  decorators: [withKnobs],
  component: CodeComponent,
  parameters: {
    componentSubtitle: 'Code renders inline code snippets and code blocks.',
  },
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
        theme={a11yLight}
      />
    </div>
  );
};

export const CustomStyles = () => {
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      This is a python snippet:{' '}
      <Code
        text={`print('Hello {}').format('world')`}
        theme={monokai}
        language="py"
      />
    </div>
  );
};
