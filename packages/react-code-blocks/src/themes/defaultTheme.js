import { colors, themed } from "@atlaskit/theme";
import memoizeOne from "memoize-one";
export var defaultColors = memoizeOne(function(theme) {
  var akTheme = {
    theme: theme
  };
  return {
    lineNumberColor: themed({
      light: colors.N90,
      dark: colors.DN90,
      dracula: "#6272a4"
    })(akTheme),
    lineNumberBgColor: themed({
      light: colors.N30,
      dark: colors.DN20,
      dracula: "#282a36"
    })(akTheme),
    backgroundColor: themed({
      light: colors.N20,
      dark: colors.DN50,
      dracula: "#282a36"
    })(akTheme),
    textColor: themed({
      light: "colors.N800",
      dark: colors.DN800,
      dracula: "#f8f8f2"
    })(akTheme),
    substringColor: themed({
      light: "colors.N400",
      dark: colors.DN400,
      dracula: "#f1fa8c"
    })(akTheme),
    keywordColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#ff79c6"
    })(akTheme),
    attributeColor: themed({
      light: colors.T300,
      dark: colors.T200,
      dracula: "#50fa7b"
    })(akTheme),
    selectorTagColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#8be9fd"
    })(akTheme),
    docTagColor: themed({
      light: colors.Y300,
      dark: colors.Y300,
      dracula: "#f1fa8c"
    })(akTheme),
    nameColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#66d9ef"
    })(akTheme),
    builtInColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#50fa7b"
    })(akTheme),
    literalColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#FF79C6"
    })(akTheme),
    bulletColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#8BE9FD"
    })(akTheme),
    codeColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#50FA7B"
    })(akTheme),
    additionColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#f1fa8c"
    })(akTheme),
    regexpColor: themed({
      light: colors.T300,
      dark: colors.T200,
      dracula: "#F1FA8C"
    })(akTheme),
    symbolColor: themed({
      light: colors.T300,
      dark: colors.T200,
      dracula: "#F1FA8C"
    })(akTheme),
    variableColor: themed({
      light: colors.T300,
      dark: colors.T200,
      dracula: "#F8F8F2"
    })(akTheme),
    templateVariableColor: themed({
      light: colors.T300,
      dark: colors.T200,
      dracula: "#FF79C6"
    })(akTheme),
    linkColor: themed({
      light: colors.P300,
      dark: colors.P100,
      dracula: "#00bcd4"
    })(akTheme),
    selectorAttributeColor: themed({
      light: colors.T300,
      dark: colors.T200,
      dracula: "#FF79C6"
    })(akTheme),
    selectorPseudoColor: themed({
      light: colors.T300,
      dark: colors.T200,
      dracula: "#FF79C6"
    })(akTheme),
    typeColor: themed({
      light: colors.T500,
      dark: colors.T300,
      dracula: "#8BE9FD"
    })(akTheme),
    stringColor: themed({
      light: colors.G300,
      dark: colors.G300,
      dracula: "#F1FA8C"
    })(akTheme),
    selectorIdColor: themed({
      light: colors.T500,
      dark: colors.T300,
      dracula: "#50FA7B"
    })(akTheme),
    selectorClassColor: themed({
      light: colors.T500,
      dark: colors.T300,
      dracula: "#50FA7B"
    })(akTheme),
    quoteColor: themed({
      light: colors.T500,
      dark: colors.T300,
      dracula: "#E9F284"
    })(akTheme),
    templateTagColor: themed({
      light: colors.T500,
      dark: colors.T300,
      dracula: "#FF79C6"
    })(akTheme),
    deletionColor: themed({
      light: colors.T500,
      dark: colors.T300,
      dracula: "#FF79C6"
    })(akTheme),
    titleColor: themed({
      light: colors.P300,
      dark: colors.P100,
      dracula: "#ff555580"
    })(akTheme),
    sectionColor: themed({
      light: colors.P300,
      dark: colors.P100,
      dracula: "#F8F8F2"
    })(akTheme),
    commentColor: themed({
      light: colors.N400,
      dark: colors.DN400,
      dracula: "#6272A4"
    })(akTheme),
    metaKeywordColor: themed({
      light: colors.G300,
      dark: colors.G300,
      dracula: "#50FA7B"
    })(akTheme),
    metaColor: themed({
      light: colors.N400,
      dark: colors.DN400,
      dracula: "#50FA7B"
    })(akTheme),
    functionColor: themed({
      light: colors.N800,
      dark: colors.DN800,
      dracula: "#50FA7B"
    })(akTheme),
    numberColor: themed({
      light: colors.B400,
      dark: colors.B100,
      dracula: "#bd93f9"
    })(akTheme)
  };
});
