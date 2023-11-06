import React, { PureComponent } from 'react';
import { applyTheme } from '../utils/themeBuilder';
import Code, { CodeProps } from './Code';

type BaseProps = Omit<CodeProps, 'codeStyle' | 'preTag'>;

export interface CodeBlockProps extends BaseProps {
  /** The style object to apply to the `CodeBlock` text directly i.e `fontSize` and such */
  codeBlockStyle?: {};
  /** The style object that accesses the style parameter on the `codeTagProps` property on the `Code` component */
  codeContainerStyle?: {};
}

const LANGUAGE_FALLBACK = 'text';

export default class CodeBlock extends PureComponent<CodeBlockProps, {}> {
  _isMounted = false;

  static displayName = 'CodeBlock';

  static defaultProps: CodeBlockProps = {
    text: "",
    showLineNumbers: true,
    wrapLongLines: false,
    startingLineNumber : 1,
    language: LANGUAGE_FALLBACK,
    theme: {},
    highlight: '',
    lineNumberContainerStyle: {},
    customStyle: {},
    codeBlockStyle: {},
  };

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  handleCopy = (event: any) => {
    /**
     * We don't want to copy the markup after highlighting, but rather the preformatted text in the selection
     */
    const data = event.nativeEvent.clipboardData;
    if (data) {
      event.preventDefault();
      const selection = window.getSelection();
      if (selection === null) {
        return;
      }
      const selectedText = selection.toString();
      const document = `<!doctype html><html><head></head><body><pre>${selectedText}</pre></body></html>`;
      data.clearData();
      data.setData('text/html', document);
      data.setData('text/plain', selectedText);
    }
  };

  render() {
    const {
      lineNumberContainerStyle,
      codeBlockStyle,
      codeContainerStyle,
    } = applyTheme(this.props.theme);

    const props = {
      language: this.props.language || LANGUAGE_FALLBACK,
      codeStyle: {
        ...codeBlockStyle,
        ...this.props?.codeBlockStyle,
      },
      customStyle: this.props?.customStyle,
      showLineNumbers: this.props.showLineNumbers,
      startingLineNumber : this.props.startingLineNumber ,
      codeTagProps: {
        style: {
          ...codeContainerStyle,
          ...this.props?.codeContainerStyle,
        },
      },
      lineNumberContainerStyle: {
        ...lineNumberContainerStyle,
        ...this.props?.lineNumberContainerStyle,
      },
      text: this.props.text.toString(),
      highlight: this.props.highlight,
      wrapLongLines: this.props.wrapLongLines
    };

    return <Code {...props} />;
  }
}
