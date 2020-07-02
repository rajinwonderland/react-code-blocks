import React, { PropsWithChildren } from 'react';
import { withTheme, ThemeProvider } from 'styled-components';
import Snippet from './components/Snippet';

// @ts-ignore
const SnippetWithTheme = withTheme(Snippet);
const emptyTheme = {};

export default function(props: PropsWithChildren<any>) {
  return (
    <ThemeProvider theme={emptyTheme}>
      <SnippetWithTheme {...props} />
    </ThemeProvider>
  );
}
