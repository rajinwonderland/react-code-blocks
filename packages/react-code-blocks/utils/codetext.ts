import { supportedLanguages } from './knobs';

export const longSnippet = {
  text: `query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}`,
  language: 'graphql',
};

export const languages = {
  text: `export type SupportedLanguages =
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
  | 'typescript';`,
  language: 'typescript',
};
