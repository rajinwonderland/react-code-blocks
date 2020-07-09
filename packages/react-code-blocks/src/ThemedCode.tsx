import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import Code from './components/Code';

const CodeWithTheme = withTheme(Code);

export default function(props: PropsWithChildren<any>) {
  return <CodeWithTheme {...props} />;
}
