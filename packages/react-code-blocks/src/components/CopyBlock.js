import React, { useState } from 'react'
import Code from '../ThemedCode'
import CodeBlock from '../ThemedCodeBlock'
import Copy from './Copy'
import Clipboard from 'clipboard'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle.js'

const Button = styled.button`
  background: ${p => p.theme.backgroundColor};
  margin-top: 0.15rem;
  border-radius: 0.25rem;
  max-height: 2rem;
  max-width: 2rem;
  &:hover {
    opacity: ${p => (p.copied ? 1 : 0.5)};
  }
  &:focus {
    outline: none;
    opacity: 1;
  }
`

const Snippet = styled.div`
  position: relative;
  background: ${p => p.theme.backgroundColor};
  border-radius: 0.25rem;
`

const uniqueId = require(`lodash.uniqueid`)

export default function({ theme, text, language, codeBlock, ...rest }) {
  const [copied, toggleCopy] = useState(false)
  const uid = uniqueId(`copy_`)
  const clip = new Clipboard(`#${uid}`)
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
            ? `p-1 pr-2`
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
          id={uid}
          {...{ theme, copied }}
          className="absolute pin-t pin-r mr-1 p-2 flex flex-wrap items-center justify-center"
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
