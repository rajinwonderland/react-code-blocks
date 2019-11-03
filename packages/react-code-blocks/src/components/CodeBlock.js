import React, { PureComponent } from 'react'
import { applyTheme } from '../utils/themeBuilder'
import Code from './Code'

const LANGUAGE_FALLBACK = 'text'

export default class CodeBlock extends PureComponent {
  static displayName = 'CodeBlock'

  static defaultProps = {
    showLineNumbers: true,
    language: LANGUAGE_FALLBACK,
    theme: {},
    codeStyle: {},
    codeBlockStyle: {},
    highlight: '',
  }

  handleCopy = event => {
    /**
     * We don't want to copy the markup after highlighting, but rather the preformatted text in the selection
     */
    const data = event.nativeEvent.clipboardData
    if (data) {
      event.preventDefault()
      const selection = window.getSelection()
      if (selection === null) {
        return
      }
      const selectedText = selection.toString()
      const document = `<!doctype html><html><head></head><body><pre>${selectedText}</pre></body></html>`
      data.clearData()
      data.setData('text/html', document)
      data.setData('text/plain', selectedText)
    }
  }

  render() {
    const {
      lineNumberContainerStyle,
      codeBlockStyle,
      codeContainerStyle,
    } = applyTheme(this.props.theme)
    const codeStyle = Object.assign({}, codeBlockStyle, this.props.codeStyle)
    const codeTagStyle = Object.assign(
      {},
      codeContainerStyle,
      this.props.codeBlockStyle
    )

    const props = {
      language: this.props.language || LANGUAGE_FALLBACK,
      codeStyle,
      showLineNumbers: this.props.showLineNumbers,
      codeTagProps: { style: codeTagStyle },
      lineNumberContainerStyle,
      text: this.props.text.toString(),
      highlight: this.props.highlight,
    }

    return <Code {...props} />
  }
}
