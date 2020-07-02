import React, { useState } from 'react';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Copy from './CopyIcon';
import styled from 'styled-components';
import { Theme, SupportedLanguages } from 'types';
import useClipboard from '../hooks/use-clipboard';

export interface Props {
  theme: Theme;
  text: string;
  codeBlock: boolean;
  copied: boolean;
  language: SupportedLanguages | string;
  [x: string]: any;
}

const Button = styled.button<Props>`
  position: absolute;
  top: 0.5em;
  right: 0.75em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.backgroundColor};
  margin-top: 0.15rem;
  border-radius: 0.25rem;
  max-height: 2rem;
  max-width: 2rem;
  padding: 0.5rem;
  &:hover {
    opacity: ${p => (p.copied ? 1 : 0.5)};
  }
  &:focus {
    outline: none;
    opacity: 1;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
`;

const Snippet = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background: ${p => p.theme.backgroundColor};
  border-radius: 0.25rem;
  padding: ${p => (p.codeBlock ? `0.25rem 0.5rem 0.25rem 0.25rem` : `0.25rem`)};
`;

export default function({ theme, text, codeBlock = false, ...rest }: Props) {
  const [copied, toggleCopy] = useState(false);
  const { copy } = useClipboard();
  const handler = () => {
    copy(text);
    toggleCopy(!copied);
  };

  return (
    <Snippet {...{ codeBlock }} theme={theme}>
      {codeBlock ? (
        <CodeBlock text={text} theme={theme} {...rest} />
      ) : (
        <Code text={text} theme={theme} {...rest} />
      )}
      <Button onClick={handler} {...{ theme, copied }}>
        <Copy
          color={copied ? theme.stringColor : theme.textColor}
          copied={copied}
          className="icon"
          size="16pt"
        />
      </Button>
    </Snippet>
  );
}
