import Color from 'color';

export type ThemeColorParam = Color | string | ArrayLike<number> | number;
export interface CodeBlockTheme {
  lineNumberColor?: ThemeColorParam;
  lineNumberBgColor?: ThemeColorParam;
  backgroundColor?: ThemeColorParam;
  textColor?: ThemeColorParam;
  substringColor?: ThemeColorParam;
  keywordColor?: ThemeColorParam;
  attributeColor?: ThemeColorParam;
  selectorTagColor?: ThemeColorParam;
  docTagColor?: ThemeColorParam;
  nameColor?: ThemeColorParam;
  builtInColor?: ThemeColorParam;
  literalColor?: ThemeColorParam;
  bulletColor?: ThemeColorParam;
  codeColor?: ThemeColorParam;
  additionColor?: ThemeColorParam;
  regexpColor?: ThemeColorParam;
  symbolColor?: ThemeColorParam;
  variableColor?: ThemeColorParam;
  templateVariableColor?: ThemeColorParam;
  linkColor?: ThemeColorParam;
  selectorAttributeColor?: ThemeColorParam;
  selectorPseudoColor?: ThemeColorParam;
  typeColor?: ThemeColorParam;
  stringColor?: ThemeColorParam;
  selectorIdColor?: ThemeColorParam;
  selectorClassColor?: ThemeColorParam;
  quoteColor?: ThemeColorParam;
  templateTagColor?: ThemeColorParam;
  deletionColor?: ThemeColorParam;
  titleColor?: ThemeColorParam;
  sectionColor?: ThemeColorParam;
  commentColor?: ThemeColorParam;
  metaKeywordColor?: ThemeColorParam;
  metaColor?: ThemeColorParam;
  functionColor?: ThemeColorParam;
  numberColor?: ThemeColorParam;
}

export type ThemeModes = 'light' | 'dark';
export interface Theme extends CodeBlockTheme {
  mode: ThemeModes;
}

export interface GlobalThemeTokens extends Theme {}

export type ThemeProps = CustomThemeProps | NoThemeProps;
export interface CustomThemeProps {
  theme: Theme;
  [index: string]: any;
}

export interface NoThemeProps {
  [index: string]: any;
}

export type DefaultValue = string | number;

export type ThemedValue<V = DefaultValue> = (props?: ThemeProps) => V | '';

/*
 * These values all those are supported by ADF.
 * The comments show mappings of these values to the corresponding
 * language definition file, or to that of the most
 * syntactically similar language supported by highlightjs
 */
export type SupportedLanguages =
  | 'abap' // → sql
  | 'actionscript'
  | 'ada'
  | 'arduino'
  | 'autoit'
  | 'bash'
  | 'c' // → cpp
  | 'clojure'
  | 'cs'
  | 'c++' // → cpp
  | 'cpp'
  | 'coffeescript'
  | 'csharp' // → cs
  | 'css'
  | 'cuda' // → cpp
  | 'd'
  | 'dart'
  | 'delphi'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'fortran'
  | 'foxpro' // → purebasic
  | 'fsharp'
  | 'go'
  | 'graphql'
  | 'gql'
  | 'groovy'
  | 'haskell'
  | 'haxe'
  | 'html' // → xml
  | 'java'
  | 'javascript'
  | 'json'
  | 'julia'
  | 'jsx'
  | 'js'
  | 'kotlin'
  | 'latex' // → tex
  | 'lisp'
  | 'livescript'
  | 'lua'
  | 'markup'
  | 'mathematica'
  | 'makefile'
  | 'matlab'
  | 'objectivec'
  | 'objective-c' // → objectivec
  | 'objective-j' // → objectivec
  | 'objectpascal' // → delphi
  | 'ocaml'
  | 'octave' // → matlab
  | 'perl'
  | 'php'
  | 'powershell'
  | 'prolog'
  | 'puppet'
  | 'python'
  | 'qml'
  | 'r'
  | 'racket' // → lisp
  | 'restructuredtext' // → rest
  | 'rest'
  | 'ruby'
  | 'rust'
  | 'sass' // → less
  | 'less'
  | 'scala'
  | 'scheme'
  | 'shell'
  | 'smalltalk'
  | 'sql'
  | 'standardml' // → sml
  | 'sml'
  | 'swift'
  | 'tcl'
  | 'tex'
  | 'text'
  | 'tsx'
  | 'ts'
  | 'typescript'
  | 'vala'
  | 'vbnet'
  | 'verilog'
  | 'vhdl'
  | 'xml'
  | 'xquery';
