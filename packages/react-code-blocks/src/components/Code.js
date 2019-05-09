import _classCallCheck from '@babel/runtime/helpers/classCallCheck'
import _createClass from '@babel/runtime/helpers/createClass'
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn'
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf'
import _inherits from '@babel/runtime/helpers/inherits'
import _defineProperty from '@babel/runtime/helpers/defineProperty'
import React, { PureComponent } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { applyTheme } from '../utils/themeBuilder'

var Code =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Code, _PureComponent)

    function Code() {
      _classCallCheck(this, Code)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Code).apply(this, arguments)
      )
    }

    _createClass(Code, [
      {
        key: `render`,
        value: function render() {
          var _applyTheme = applyTheme(this.props.theme),
            inlineCodeStyle = _applyTheme.inlineCodeStyle

          var language = this.props.language || `text`
          var props = {
            language: language,
            PreTag: this.props.preTag,
            style:
              { ...inlineCodeStyle, ...this.props.codeStyle } ||
              inlineCodeStyle,
            showLineNumbers: this.props.showLineNumbers,
            lineNumberContainerStyle: this.props.lineNumberContainerStyle,
            codeTagProps: this.props.codeTagProps,
          }
          return React.createElement(SyntaxHighlighter, props, this.props.text)
        },
      },
    ])

    return Code
  })(PureComponent)

_defineProperty(Code, `defaultProps`, {
  theme: {},
  showLineNumbers: false,
  lineNumberContainerStyle: {},
  codeTagProps: {},
  preTag: `span`,
})

export { Code as default }
