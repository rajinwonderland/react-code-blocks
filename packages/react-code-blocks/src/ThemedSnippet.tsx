import { SnippetProps } from 'components/Snippet/Snippet';
import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import Snippet from './components/Snippet';

// @ts-ignore
const SnippetWithTheme = withTheme(Snippet);

export default function(props: PropsWithChildren<SnippetProps>) {
  return <SnippetWithTheme {...props} />;
}
