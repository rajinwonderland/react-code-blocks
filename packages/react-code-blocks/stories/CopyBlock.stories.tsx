import React from 'react';
import { CopyBlock, nord, a11yLight, a11yDark, dracula } from '../src';
import CodeBlockComponent from '../src/components/CodeBlock';
import CopyBlockComponent from '../src/components/CopyBlock';
import CodeComponent from '../src/components/Code';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { supportedLanguages, themeObj } from '../utils/knobs';
import { longSnippet, resultSnippet } from '../utils/codetext';
import he from 'he';

export default {
  title: 'CopyBlock',
  decorators: [withKnobs],
  component: CopyBlockComponent,
  subcomponents: { CodeBlockComponent, CodeComponent },
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
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};

export const CustomStyles = () => {
  const showLineNumbers = boolean('showLineNumbers', true);
  const codeBlock = boolean('codeBlock', true);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'auto',
      }}
    >
      <div
        style={{
          width: '100%',
          flex: 1,
          background: a11yDark.builtInColor,
          paddingBottom: '1em',
        }}
      >
        <h5 style={{ textAlign: 'center' }}>Query</h5>
        <CopyBlock
          {...longSnippet}
          {...{ showLineNumbers, codeBlock }}
          theme={a11yDark}
          customStyle={{
            height: '250px',
            overflowY: 'scroll',
            margin: '0px 0.75rem',
            borderRadius: '5px',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
            fontSize: '0.75rem',
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          flex: 1,
          background: a11yLight.sectionColor,
          color: 'white',
          paddingBottom: '1em',
        }}
      >
        <h5 style={{ textAlign: 'center' }}>Result</h5>
        <CopyBlock
          {...resultSnippet}
          {...{ showLineNumbers, codeBlock }}
          theme={a11yLight}
          customStyle={{
            height: '250px',
            overflowY: 'scroll',
            borderRadius: '5px',
            boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
            fontSize: '0.75rem',
            margin: '0px 0.75rem',
          }}
        />
      </div>
    </div>
  );
};

export const UsageWithAPredefinedTheme = () => {
  const showLineNumbers = boolean('showLineNumbers', true);
  const codeBlock = boolean('codeBlock', true);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CopyBlock
        text={`// Usage with the Nord theme
import { CodeBlock, nord} from 'react-code-blocks';
const MyCodeComponent = () => (
  <CopyBlock
    text="HELLO WORLD"
    theme={nord}
    language="text"
  />
)`}
        language={'jsx'}
        theme={nord}
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};

export const WithACoolMonospaceFont = () => (
  <div style={{ fontFamily: 'IBM Plex Mono' }}>
    <CopyBlock
      text={`function toBe() {
  if (Math.random() < 0.5) {
    return true;
  } else {
    return false;
  }
}`}
      showLineNumbers
      codeBlock
      language="js"
      theme={dracula}
    />
  </div>
);
