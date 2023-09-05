import React, { useState } from 'react';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Copy from './CopyIcon';
import styled from 'styled-components';
import { Theme } from '../types';
import useClipboard from '../hooks/use-clipboard';

export interface CopyBlockProps {
  /** A custom theme to be applied, implements the `CodeBlockTheme` interface. You can also pass pass a precomposed theme into here. For available themes. [See THEMES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md) */
  theme: Theme;

  /** The code to be formatted */
  text: string;

  /** If true, the component render a `CodeBlock` instead of a `Code` component */

  codeBlock: boolean;

  /** This is a prop used internally by the `CopyBlock`'s button component to toggle the icon to a success icon */
  copied: boolean;

  /** If true, wrap long lines */
  wrapLongLines: boolean;

  /** The onCopy function is called if the copy icon is clicked. This enables you to add a custom message that the code block is copied. */
  onCopy: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** The language in which the code is written. [See LANGUAGES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md) */

  language: string;
  customStyle?: {};
  /** I know it's lazy, but I'll extend the interfaces later */
  [x: string]: any;
}

type CascadedProps = Partial<CopyBlockProps> & { theme: Theme };

const Button = styled.button<CascadedProps>`
  position: absolute;
  top: 0.5em;
  right: 0.75em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${(p: CascadedProps) => p.theme.backgroundColor as string};
  margin-top: 0.15rem;
  border-radius: 0.25rem;
  max-height: 2rem;
  max-width: 2rem;
  padding: 0.25rem;
  &:hover {
    opacity: ${(p: CascadedProps) => (p.copied ? 1 : 0.5)};
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

const Snippet = styled.div<CascadedProps>`
  position: relative;
  background: ${(p: CascadedProps) => p.theme.backgroundColor as string};
  border-radius: 0.25rem;
  padding: ${(p: CascadedProps) => (p.codeBlock ? `0.25rem 0.5rem 0.25rem 0.25rem` : `0.25rem`)};
`;

export default function CopyBlock({
  theme,
  text,
  codeBlock = false,
  customStyle = {},
  onCopy,
  ...rest
}: CopyBlockProps) {
  const [copied, toggleCopy] = useState(false);
  const { copy } = useClipboard();
  const handler = (event: React.MouseEvent<HTMLButtonElement>) => {
    copy(text);
    onCopy ? onCopy(event) : toggleCopy(!copied);
  };

  return (
    <Snippet {...{ codeBlock }} style={customStyle} theme={theme}>
      {codeBlock ? (
        // @ts-ignore
        <CodeBlock text={text} theme={theme} {...rest} />
      ) : (
        // @ts-ignore
        <Code text={text} theme={theme} {...rest} />
      )}
      <Button aria-label="Copy Code" type="button" onClick={handler} {...{ theme, copied }}>
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
