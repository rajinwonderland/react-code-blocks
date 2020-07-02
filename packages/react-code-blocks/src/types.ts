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

export type SupportedLanguages =
  | 'bash'
  | 'c'
  | 'clojure'
  | 'cpp'
  | 'csharp'
  | 'dart'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'fsharp'
  | 'graphql'
  | 'go'
  | 'groovy'
  | 'haskell'
  | 'html'
  | 'java'
  | 'javascript'
  | 'jsx'
  | 'julia'
  | 'kotlin'
  | 'lisp'
  | 'makefile'
  | 'matlab'
  | 'objectivec'
  | 'ocaml'
  | 'php'
  | 'python'
  | 'r'
  | 'ruby'
  | 'rust'
  | 'scala'
  | 'sql'
  | 'swift'
  | 'tsx'
  | 'typescript';
