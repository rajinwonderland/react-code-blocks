import React from 'react';
import { CodeBlock } from '../src';
import CodeBlockComponent from '../src/components/CodeBlock';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { supportedLanguages, themeObj } from '../utils/knobs';
import { longSnippet, languages } from '../utils/codetext';
import he from 'he';

export default {
  title: 'CodeBlock',
  decorators: [withKnobs],
  component: CodeBlockComponent,
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
  const showLineNumbers = boolean('showLineNumbers', true);
  const wrapLines = boolean('wrapLines', true);
  const code = text('text', `const add = (x,y) => x+y;`);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CodeBlock
        text={he.decode(code)}
        language={language}
        theme={require('../src')[themes]}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
      />
    </div>
  );
};

export const SupportedLanguages = () => {
  const themes = select('theme', themeObj, 'dracula');
  const showLineNumbers = boolean('showLineNumbers', true);
  const wrapLines = boolean('wrapLines', true);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CodeBlock
        {...languages}
        theme={require('../src')[themes]}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
      />
    </div>
  );
};

export const AddAScrollbar = () => {
  const themes = select('theme', themeObj, 'dracula');
  const showLineNumbers = boolean('showLineNumbers', true);
  const wrapLines = boolean('wrapLines', true);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CodeBlock
        {...longSnippet}
        customStyle={{
          height: '200px',
          overflow: 'scroll',
        }}
        theme={require('../src')[themes]}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
      />
    </div>
  );
};

export const CustomStyles = () => {
  const themes = select('theme', themeObj, 'dracula');
  const showLineNumbers = boolean('showLineNumbers', true);
  const wrapLines = boolean('wrapLines', true);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CodeBlock
        {...longSnippet}
        customStyle={{
          height: '200px',
          width: '500px',
          overflow: 'scroll',
        }}
        theme={require('../src')[themes]}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
      />
    </div>
  );
};
