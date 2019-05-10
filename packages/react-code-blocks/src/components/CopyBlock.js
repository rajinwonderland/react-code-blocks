import React, { useState } from 'react'
import Code from './Code'
import CodeBlock from './CodeBlock'
import Copy from './Copy'
import Clipboard from 'clipboard'
import styled from 'styled-components'

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.backgroundColor};
  margin-top: 0.15rem;
  border-radius: 0.25rem;
  max-height: 2rem;
  max-width: 2rem;
  padding: 0.5rem;
  &:hover {
    opacity: ${p => (p.copied ? 1 : 0.5)};
  }
  &:focus {
    outline: none;
    opacity: 1;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
`

const Snippet = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background: ${p => p.theme.backgroundColor};
  border-radius: 0.25rem;
  padding: ${p => (p.codeBlock ? `0.25rem 0.5rem 0.25rem 0.25rem` : `0.25rem`)};
`

const uniqueId = require(`lodash.uniqueid`)

export default function({ theme, text, codeBlock, ...rest }) {
  const [copied, toggleCopy] = useState(false)
  const uid = uniqueId(`copy_`)
  if (typeof document !== `undefined`) {
    const clip = new Clipboard(`#${uid}`)
    clip.on(`success`, () => {
      toggleCopy(true)
      return setTimeout(() => toggleCopy(false), 1000)
    })
    clip.on(`error`, err => console.error(err))
  }
  return (
    <Snippet {...{ codeBlock }} theme={theme}>
      {codeBlock ? (
        <CodeBlock text={text} theme={theme} {...rest} />
      ) : (
        <Code text={text} theme={theme} {...rest} />
      )}
      <Button
        id={uid}
        {...{ theme, copied }}
        data-clipboard-text={text}
        disabled={copied}
      >
        <Copy
          color={copied ? theme.stringColor : theme.textColor}
          copied={copied}
          className="icon"
        />
      </Button>
    </Snippet>
  )
}
