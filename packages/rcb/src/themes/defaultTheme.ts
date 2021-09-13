import themed from '../utils/themed';
import { Theme, CodeBlockTheme } from 'types';
export const defaultColors = (theme: Theme): CodeBlockTheme => {
  const rcbTheme = {
    theme: theme,
  };
  return {
    lineNumberColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(rcbTheme),
    lineNumberBgColor: themed({
      light: `#fafafa`,
      dark: `#282c34`,
    })(rcbTheme),
    backgroundColor: themed({
      light: `#fafafa`,
      dark: `#282c34`,
    })(rcbTheme),
    textColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(rcbTheme),
    substringColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(rcbTheme),
    keywordColor: themed({
      light: `#a626a4`,
      dark: `#c678dd`,
    })(rcbTheme),
    attributeColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(rcbTheme),
    selectorAttributeColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(rcbTheme),
    docTagColor: themed({
      light: `#a626a4`,
      dark: `#c678dd`,
    })(rcbTheme),
    nameColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(rcbTheme),
    builtInColor: themed({
      light: `#c18401`,
      dark: `#e6c07b`,
    })(rcbTheme),
    literalColor: themed({
      light: `#0184bb`,
      dark: `#56b6c2`,
    })(rcbTheme),
    bulletColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(rcbTheme),
    codeColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(rcbTheme),
    additionColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(rcbTheme),
    regexpColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(rcbTheme),
    symbolColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(rcbTheme),
    variableColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(rcbTheme),
    templateVariableColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(rcbTheme),
    linkColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(rcbTheme),
    selectorClassColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(rcbTheme),
    typeColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(rcbTheme),
    stringColor: themed({
      light: `#50a14f`,
      dark: `#98c379`,
    })(rcbTheme),
    selectorIdColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(rcbTheme),
    quoteColor: themed({
      light: `#a0a1a7`,
      dark: `#5c6370`,
    })(rcbTheme),
    templateTagColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(rcbTheme),
    deletionColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(rcbTheme),
    titleColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(rcbTheme),
    sectionColor: themed({
      light: `#e45649`,
      dark: `#e06c75`,
    })(rcbTheme),
    commentColor: themed({
      light: `#a0a1a7`,
      dark: `#5c6370`,
    })(rcbTheme),
    metaKeywordColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(rcbTheme),
    metaColor: themed({
      light: `#4078f2`,
      dark: `#61aeee`,
    })(rcbTheme),
    functionColor: themed({
      light: `#383a42`,
      dark: `#abb2bf`,
    })(rcbTheme),
    numberColor: themed({
      light: `#986801`,
      dark: `#d19a66`,
    })(rcbTheme),
  };
};
