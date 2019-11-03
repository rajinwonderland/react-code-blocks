import React from 'react'
import { withTheme, ThemeProvider } from 'styled-components'
import Code from './components/Code'

const CodeWithTheme = withTheme(Code)
const emptyTheme = {}

export default function(props) {
  return (
    <ThemeProvider theme={emptyTheme}>
      <CodeWithTheme {...props} />
    </ThemeProvider>
  )
}
