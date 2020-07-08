import React from 'react';
import { CopyBlock } from '../src';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { supportedLanguages, themeObj } from '../utils/knobs';
import he from 'he';

export default {
  title: 'CopyBlock',
  decorators: [withKnobs],
  component: CopyBlock,
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => {
  const language = select(
    'language',
    Object.assign({}, ...supportedLanguages.map(val => ({ [val]: val }))),
    'python'
  );
  //@ts-ignore
  const code = text(
    'text',
    `import pandas as pd
df = pd.read_csv('some_random.csv');
df.head(5)`
  );
  const themes = select('theme', themeObj, 'dracula');
  const showLineNumbers = boolean('showLineNumbers', true);
  const wrapLines = boolean('wrapLines', true);
  const codeBlock = boolean('codeBlock', true);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CopyBlock
        text={he.decode(code)}
        language={language}
        theme={require('../src')[themes]}
        {...{ showLineNumbers, wrapLines, codeBlock }}
        customStyle={{
          height: '50px',
          width: '350px',
          overflow: 'scroll',
        }}
      />
    </div>
  );
};
