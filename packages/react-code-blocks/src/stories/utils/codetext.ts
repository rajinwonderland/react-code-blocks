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

export const resultSnippet = {
  text: `{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "friendsConnection": {
        "totalCount": 4,
        "edges": [
          {
            "node": {
              "name": "Han Solo"
            }
          },
          {
            "node": {
              "name": "Leia Organa"
            }
          },
          {
            "node": {
              "name": "C-3PO"
            }
          }
        ]
      }
    },
    "rightComparison": {
      "name": "R2-D2",
      "friendsConnection": {
        "totalCount": 3,
        "edges": [
          {
            "node": {
              "name": "Luke Skywalker"
            }
          },
          {
            "node": {
              "name": "Han Solo"
            }
          },
          {
            "node": {
              "name": "Leia Organa"
            }
          }
        ]
      }
    }
  }
}`,
  language: 'json',
};
