import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import Code, { CodeProps } from './components/Code';

const CodeWithTheme = withTheme(Code);

export default function(props: PropsWithChildren<CodeProps>) {
  return <CodeWithTheme {...props} />;
}
