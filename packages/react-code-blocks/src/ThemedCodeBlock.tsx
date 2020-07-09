import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import CodeBlock from './components/CodeBlock';

const CodeBlockWithTheme = withTheme(CodeBlock);

export default function(props: PropsWithChildren<any>) {
  return <CodeBlockWithTheme {...props} />;
}
