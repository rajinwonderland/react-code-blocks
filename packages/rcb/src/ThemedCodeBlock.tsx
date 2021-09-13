import CodeBlock, { CodeBlockProps } from 'components/CodeBlock';
import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';

const CodeBlockWithTheme = withTheme(CodeBlock);

export default function (props: PropsWithChildren<CodeBlockProps>) {
  return <CodeBlockWithTheme {...props} />;
}
