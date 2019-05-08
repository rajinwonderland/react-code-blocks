import _classCallCheck from '@babel/runtime/helpers/classCallCheck'
import _createClass from '@babel/runtime/helpers/createClass'
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn'
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf'
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized'
import _inherits from '@babel/runtime/helpers/inherits'
import _defineProperty from '@babel/runtime/helpers/defineProperty'
import React, { PureComponent } from 'react'
import { applyTheme } from '../themes/themeBuilder'
import Code from './Code'
var LANGUAGE_FALLBACK = `text`

var CodeBlock =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(CodeBlock, _PureComponent)

    function CodeBlock() {
      var _getPrototypeOf2

      var _this

      _classCallCheck(this, CodeBlock)

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(CodeBlock)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      )

      _defineProperty(_assertThisInitialized(_this), `handleCopy`, function(
        event
      ) {
        /**
         * We don't want to copy the markup after highlighting, but rather the preformatted text in the selection
         */
        var data = event.nativeEvent.clipboardData

        if (data) {
          event.preventDefault()
          var selectedText = window.getSelection().toString()
          var document = `<!doctype html><html><head></head><body><pre>`.concat(
            selectedText,
            `</pre></body></html>`
          )
          data.clearData()
          data.setData(`text/html`, document)
          data.setData(`text/plain`, selectedText)
        }
      })

      return _this
    }

    _createClass(CodeBlock, [
      {
        key: `render`,
        value: function render() {
          var _applyTheme = applyTheme(this.props.theme),
            lineNumberContainerStyle = _applyTheme.lineNumberContainerStyle,
            codeBlockStyle = _applyTheme.codeBlockStyle,
            codeContainerStyle = _applyTheme.codeContainerStyle

          var props = {
            language: this.props.language || `text`,
            codeStyle: { ...codeBlockStyle, ...this.props.codeStyle },
            showLineNumbers: this.props.showLineNumbers,
            codeTagProps: {
              style: {
                ...codeContainerStyle,
                ...this.props.codeContainerStyle,
              },
            },
            lineNumberContainerStyle: lineNumberContainerStyle,
            text: this.props.text.toString(),
          }
          return React.createElement(Code, props)
        },
      },
    ])

    return CodeBlock
  })(PureComponent)

_defineProperty(CodeBlock, `displayName`, `CodeBlock`)

_defineProperty(CodeBlock, `defaultProps`, {
  showLineNumbers: true,
  language: LANGUAGE_FALLBACK,
  theme: {},
})

export { CodeBlock as default }
