import React, { PureComponent } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { applyTheme } from '../utils/themeBuilder'

export default class Code extends PureComponent {
  static defaultProps = {
    theme: {},
    showLineNumbers: false,
    lineNumberContainerStyle: {},
    codeTagProps: {},
    preTag: 'span',
    highlight: '',
  }

  getLineOpacity(lineNumber) {
    if (!this.props.highlight) {
      return 1
    }

    const highlight = this.props.highlight
      .split(',')
      .map(num => {
        if (num.indexOf('-') > 0) {
          // We found a line group, e.g. 1-3
          const [from, to] = num
            .split('-')
            .map(Number)
            .sort()
          return Array(to + 1)
            .fill(undefined)
            .map((_, index) => index)
            .slice(from, to + 1)
        }

        return Number(num)
      })
      .reduce((acc, val) => acc.concat(val), [])

    if (highlight.length === 0) {
      return 1
    }

    if (highlight.includes(lineNumber)) {
      return 1
    }

    return 0.3
  }

  render() {
    const { inlineCodeStyle } = applyTheme(this.props.theme)
    const language = this.props.language

    const props = {
      language,
      PreTag: this.props.preTag,
      style: this.props.codeStyle || inlineCodeStyle,
      showLineNumbers: this.props.showLineNumbers,
      lineNumberContainerStyle: this.props.lineNumberContainerStyle,
      codeTagProps: this.props.codeTagProps,
    }

    return (
      <SyntaxHighlighter
        {...props}
        // Wrap lines is needed to set styles on the line.
        // We use this to set opacity if highlight specific lines.
        wrapLines={this.props.highlight.length > 0}
        lineNumberStyle={lineNumber => ({
          opacity: this.getLineOpacity(lineNumber),
        })}
        // Types are incorrect.
        // @ts-ignore
        lineProps={lineNumber => ({
          style: {
            opacity: this.getLineOpacity(lineNumber),
          },
        })}
      >
        {this.props.text}
      </SyntaxHighlighter>
    )
  }
}
