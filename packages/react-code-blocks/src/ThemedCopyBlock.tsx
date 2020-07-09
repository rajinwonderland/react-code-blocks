import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import CopyBlock from './components/CopyBlock';
const CopyBlockWithTheme = withTheme(CopyBlock);

export default function(props: PropsWithChildren<any>) {
  return <CopyBlockWithTheme {...props} />;
}
