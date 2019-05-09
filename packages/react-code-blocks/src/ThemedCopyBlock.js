import React from 'react'
import { withTheme, ThemeProvider } from 'styled-components'
import CopyBlock from './components/CopyBlock'
var CopyBlockWithTheme = withTheme(CopyBlock)
var emptyTheme = {}
export default function(props) {
  return React.createElement(
    ThemeProvider,
    {
      theme: emptyTheme,
    },
    React.createElement(CopyBlockWithTheme, props)
  )
}
