import Code, { CodeProps } from 'components/Code';
import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';

const CodeWithTheme = withTheme(Code);

export default function (props: PropsWithChildren<CodeProps>) {
  return <CodeWithTheme {...props} />;
}
