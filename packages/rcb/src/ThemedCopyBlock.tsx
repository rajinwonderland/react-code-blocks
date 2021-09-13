import CopyBlock, { CopyBlockProps } from 'components/CopyBlock';
import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
const CopyBlockWithTheme = withTheme(CopyBlock);

export default function (props: PropsWithChildren<CopyBlockProps>) {
  return <CopyBlockWithTheme {...props} />;
}
