import React from 'react'
import { withTheme, ThemeProvider } from 'styled-components'
import CodeBlock from './components/CodeBlock'
const CodeBlockWithTheme = withTheme(CodeBlock)
const emptyTheme = {}

export default function(props) {
  return (
    <ThemeProvider theme={emptyTheme}>
      <CodeBlockWithTheme {...props} />
    </ThemeProvider>
  )
}
