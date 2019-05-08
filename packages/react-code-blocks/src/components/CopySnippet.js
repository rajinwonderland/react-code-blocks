import React, { useState } from 'react'
import Code from '../ThemedCode'
import CodeBlock from '../ThemedCodeBlock'
import Copy from './Copy'
import Clipboard from 'clipboard'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle.js'

const Button = styled.button`
  background: ${p => p.theme.backgroundColor};
  border: 1px solid ${p => (p.copied ? `transparent` : p.theme.commentColor)};
  border-radius: 0.25rem;
  max-height: 2rem;
  max-width: 2rem;
`

const Snippet = styled.div`
  position: relative;
  background: ${p => p.theme.backgroundColor};
`
export default function({ theme, text, language, codeBlock, ...rest }) {
  const [copied, toggleCopy] = useState(false)
  const clip = new Clipboard(`#copy`)
  clip.on(`success`, () => {
    toggleCopy(true)
    return setTimeout(() => toggleCopy(false), 1000)
  })
  clip.on(`error`, err => console.error(err))
  return (
    <React.Fragment>
      <GlobalStyle />
      <Snippet
        className={
          codeBlock
            ? `pr-2`
            : `flex flex-wrap justify-between items-center w-2/3 p-1`
        }
        theme={theme}
      >
        {codeBlock ? (
          <CodeBlock language={language} text={text} theme={theme} {...rest} />
        ) : (
          <Code language={language} text={text} theme={theme} {...rest} />
        )}
        <Button
          id="copy"
          {...{ theme, copied }}
          className="absolute pin-t pin-r mt-1 mr-1 p-2 flex flex-wrap items-center justify-center"
          data-clipboard-text={text}
          disabled={copied}
        >
          <Copy
            color={copied ? theme.stringColor : theme.textColor}
            copied={copied}
            className="w-4 h-4"
          />
        </Button>
      </Snippet>
    </React.Fragment>
  )
}
