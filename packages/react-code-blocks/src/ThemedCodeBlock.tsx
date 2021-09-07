import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import CodeBlock, { CodeBlockProps } from './components/CodeBlock';

const CodeBlockWithTheme = withTheme(CodeBlock);

export default function(props: PropsWithChildren<CodeBlockProps>) {
  return <CodeBlockWithTheme {...props} />;
}
