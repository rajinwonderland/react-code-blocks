import React from 'react';
import { CodeBlock, atomOneDark, atomOneLight } from '../src';
import CodeBlockComponent from '../src/components/CodeBlock';
import CodeComponent from '../src/components/Code';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { supportedLanguages, themeObj } from '../utils/knobs';
import { longSnippet, languages, resultSnippet } from '../utils/codetext';

import he from 'he';

export default {
  title: 'CodeBlock',
  parameters: {
    componentSubtitle: 'CodeBlock renders an isolated code snippet or block.',
  },
  decorators: [withKnobs],
  component: CodeBlockComponent,
  subcomponents: { CodeComponent },
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
      />
    </div>
  );
};

export const SupportedLanguages = () => {
  const themes = select('theme', themeObj, 'dracula');
  const showLineNumbers = boolean('showLineNumbers', true);

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
      />
    </div>
  );
};

export const AddAScrollbar = () => {
  const themes = select('theme', themeObj, 'dracula');
  const showLineNumbers = boolean('showLineNumbers', true);
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
      />
    </div>
  );
};

export const CustomStyles = () => {
  const showLineNumbers = boolean('showLineNumbers', true);
  const wrapLines = boolean('wrapLines', true);
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
          background: atomOneDark.builtInColor,
          paddingBottom: '1em',
        }}
      >
        <h5 style={{ textAlign: 'center' }}>Query</h5>
        <CodeBlock
          {...longSnippet}
          {...{ showLineNumbers, wrapLines }}
          theme={atomOneDark}
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
          background: atomOneLight.sectionColor,
          color: 'white',
          paddingBottom: '1em',
        }}
      >
        <h5 style={{ textAlign: 'center' }}>Result</h5>
        <CodeBlock
          {...resultSnippet}
          {...{ showLineNumbers, wrapLines }}
          theme={atomOneLight}
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
  const wrapLines = boolean('wrapLines', true);
  const codeBlock = boolean('codeBlock', true);
  return (
    <div
      style={{
        fontFamily: 'Fira Code',
      }}
    >
      <CodeBlock
        text={`// using the atomOneDark theme
import { CodeBlock, nord} from 'react-code-blocks';
const MyCodeComponent = () => (
  <CodeBlock
    text="HELLO WORLD"
    theme={nord}
    language="text"
  />
)`}
        language={'jsx'}
        theme={atomOneDark}
        {...{ showLineNumbers, wrapLines, codeBlock }}
      />
    </div>
  );
};


