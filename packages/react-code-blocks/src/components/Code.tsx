import React, { PureComponent } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { applyTheme } from '../utils/themeBuilder';
import { Theme } from '../types';
import { normalizeLanguage } from '../utils/normalizeLanguage';

export interface CodeProps {
  /** The style object to apply to code */
  codeStyle?: {};
  /** The element or custom react component to use in place of the default code tag */
  codeTagProps?: {};
  /** The language in which the code is written. [See LANGUAGES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md) */
  language: string;
  /** The style object that will be combined with the top level style on the pre tag, styles here will overwrite earlier styles. */
  customStyle?: {};

  /** The style object to apply to the container that shows line number */
  lineNumberContainerStyle?: {};

  /** The element or custom react component to use in place of the default span tag */
  preTag: Node | string;
  /** Indicates whether or not to show line numbers */
  showLineNumbers: boolean;
  /**For choosing starting line**/
  startingLineNumber :number;
  /** The code to be formatted */
  text: string;
  /** A custom theme to be applied, implements the `CodeBlockTheme` interface. You can also pass pass a precomposed theme into here. For available themes. [See THEMES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md) */
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
  _isMounted = false;
  static defaultProps = {
    theme: {},
    showLineNumbers: false,
    startingLineNumber : 1,
    lineNumberContainerStyle: {},
    codeTagProps: {},
    preTag: 'span',
    highlight: '',
    customStyle: {},
  };
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

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
    const language = normalizeLanguage(this.props.language);

    const props = {
      language,
      PreTag: this.props.preTag,
      style: this.props.codeStyle || inlineCodeStyle,
      showLineNumbers: this.props.showLineNumbers,
      startingLineNumber: this.props.startingLineNumber ,
      codeTagProps: this.props.codeTagProps,
    };

    return (
      <SyntaxHighlighter
        {...props}
        // Wrap lines is needed to set styles on the line.
        // We use this to set opacity if highlight specific lines.
        wrapLines={this.props.highlight.length > 0}
        customStyle={this.props.customStyle}
        // Types are incorrect.
        // @ts-ignore
        lineProps={lineNumber => ({
          style: {
            opacity: this.getLineOpacity(lineNumber),
            ...this.props.lineNumberContainerStyle,
          },
        })}
      >
        {this.props.text}
      </SyntaxHighlighter>
    );
  }
}
