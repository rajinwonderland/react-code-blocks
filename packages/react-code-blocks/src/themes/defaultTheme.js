import themed from '../utils/themed'
export var defaultColors = function(theme) {
  var akTheme = {
    theme: theme,
  }
  return {
    lineNumberColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(akTheme),
    lineNumberBgColor: themed({
      light: `#fafafa`,
      dark: `#282c34`,
    })(akTheme),
    backgroundColor: themed({
      light: `#fafafa`,
      dark: `#282c34`,
    })(akTheme),
    textColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(akTheme),
    substringColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(akTheme),
    keywordColor: themed({
      light: `#a626a4`,
      dark: `#c678dd`,
    })(akTheme),
    attributeColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(akTheme),
    selectorAttributeColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(akTheme),
    docTagColor: themed({
      light: `#a626a4`,
      dark: `#c678dd`,
    })(akTheme),
    nameColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(akTheme),
    builtInColor: themed({
      light: `#c18401`,
      dark: `#e6c07b`,
    })(akTheme),
    literalColor: themed({
      light: `#0184bb`,
      dark: `#56b6c2`,
    })(akTheme),
    bulletColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(akTheme),
    codeColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(akTheme),
    additionColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(akTheme),
    regexpColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(akTheme),
    symbolColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(akTheme),
    variableColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(akTheme),
    templateVariableColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(akTheme),
    linkColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(akTheme),
    selectorClassColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(akTheme),
    typeColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(akTheme),
    stringColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(akTheme),
    selectorIdColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(akTheme),
    quoteColor: themed({
      light: `#a0a1a7`,
      dark: `#5c6370`,
    })(akTheme),
    templateTagColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(akTheme),
    deletionColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(akTheme),
    titleColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(akTheme),
    sectionColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(akTheme),
    commentColor: themed({
      light: `#a0a1a7`,
      dark: `#5c6370`,
    })(akTheme),
    metaKeywordColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(akTheme),
    metaColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(akTheme),
    functionColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(akTheme),
    numberColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(akTheme),
  }
}
