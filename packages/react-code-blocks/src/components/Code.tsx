import React, { PureComponent } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { applyTheme } from '../utils/themeBuilder';
import { Theme, SupportedLanguages } from 'types';

export interface CodeProps {
  /** The style object to apply to code */
  codeStyle?: {};
  /** The element or custom react component to use in place of the default code tag */
  codeTagProps?: {};
  /** The language in which the code is written */
  language: SupportedLanguages | string;
  /** The style object to apply to the container that shows line number */
  lineNumberContainerStyle: {};
  /** The element or custom react component to use in place of the default span tag */
  preTag: Node | string;
  /** Indicates whether or not to show line numbers */
  showLineNumbers: boolean;
  /** The code to be formatted */
  text: string;
  /** A custom theme to be applied, implements the Theme interface */
  theme?: Theme;

  /**
   * Lines to highlight comma delimited.
   * Example uses:

   * - To highlight one line `highlight="3"`
   * - To highlight a group of lines `highlight="1-5"`
   * - To highlight multiple groups `highlight="1-5,7,10,15-20"`
   */
  highlight: string;
}

export default class Code extends PureComponent<CodeProps, {}> {
  static defaultProps = {
    theme: {},
    showLineNumbers: false,
    lineNumberContainerStyle: {},
    codeTagProps: {},
    preTag: 'span',
    highlight: '',
  };

  getLineOpacity(lineNumber: number) {
    if (!this.props.highlight) {
      return 1;
    }

    const highlight = this.props.highlight
      .split(',')
      .map(num => {
        if (num.indexOf('-') > 0) {
          // We found a line group, e.g. 1-3
          const [from, to] = num
            .split('-')
            .map(Number)
            .sort();
          return Array(to + 1)
            .fill(undefined)
            .map((_, index) => index)
            .slice(from, to + 1);
        }

        return Number(num);
      })
      .reduce<number[]>((acc, val) => acc.concat(val), []);

    if (highlight.length === 0) {
      return 1;
    }

    if (highlight.includes(lineNumber)) {
      return 1;
    }

    return 0.3;
  }

  render() {
    const { inlineCodeStyle } = applyTheme(this.props.theme);
    const { language } = this.props;

    const props = {
      language,
      PreTag: this.props.preTag,
      style: this.props.codeStyle || inlineCodeStyle,
      showLineNumbers: this.props.showLineNumbers,
      lineNumberContainerStyle: this.props.lineNumberContainerStyle,
      codeTagProps: this.props.codeTagProps,
    };

    return (
      <SyntaxHighlighter
        {...props}
        // Wrap lines is needed to set styles on the line.
        // We use this to set opacity if highlight specific lines.
        wrapLines={this.props.highlight.length > 0}
        lineNumberStyle={(lineNumber: number) => ({
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
    );
  }
}
