import React, { PropsWithChildren } from 'react';
import { withTheme, ThemeProvider } from 'styled-components';
import CopyBlock from 'components/CopyBlock';
const CopyBlockWithTheme = withTheme(CopyBlock);
const emptyTheme = {};

export default function(props: PropsWithChildren<any>) {
  return (
    <ThemeProvider theme={emptyTheme}>
      <CopyBlockWithTheme {...props} />
    </ThemeProvider>
  );
}
