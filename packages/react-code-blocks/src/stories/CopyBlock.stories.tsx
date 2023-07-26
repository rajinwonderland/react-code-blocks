import React from 'react';
import { CopyBlock, nord, a11yLight, a11yDark, dracula } from '../.';
import CodeBlockComponent from '../components/CodeBlock';
import CopyBlockComponent from '../components/CopyBlock';
import CodeComponent from '../components/Code';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { supportedLanguages, themeObj } from './utils/knobs';
import { longSnippet, resultSnippet } from './utils/codetext';
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
  const wrapLongLines = boolean('wrapLongLines', false);
  const codeBlock = boolean('codeBlock', true);
  let copied = boolean('copied', false);
  const onCopy = () => {
    copied = boolean('copied', !copied);
  }

  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CopyBlock
        copied={copied}
        onCopy={onCopy}
        text={he.decode(code)}
        language={language}
        theme={a11yLight}
        wrapLongLines={wrapLongLines}
        {...{ showLineNumbers, codeBlock }}
      />
    </div>
  );
};

export const CustomStyles = () => {
  const showLineNumbers = boolean('showLineNumbers', true);
  const codeBlock = boolean('codeBlock', true);
  let copied = boolean('copied', false);
  const onCopy = () => {
    copied = boolean('copied', !copied);
  }
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
          copied={copied}
          onCopy={onCopy}
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
          copied={copied}
          onCopy={onCopy}
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
  let copied = boolean('copied', false);
  const onCopy = () => {
    copied = boolean('copied', !copied);
  }
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CopyBlock
          copied={copied}
          onCopy={onCopy}
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
          copied={false}
          onCopy={() => null}
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
