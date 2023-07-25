import getTheme from './getTheme';

export default function themed(modesOrVariant: {
  light: string;
  dark: string;
}) {
  var modes = modesOrVariant;
  return function(
    props:
      | import('../types').CustomThemeProps
      | import('../types').NoThemeProps
      | undefined
  ) {
    var theme = getTheme(props);
    let themeMode = theme.mode;
    return modes[themeMode];
  };
}
