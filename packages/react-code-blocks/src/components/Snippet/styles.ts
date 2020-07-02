import { CodeBlockTheme } from '../../types';

export const getStyles = (theme: CodeBlockTheme) => {
  const styles = {
    color: theme.textColor,
    border: theme.lineNumberBgColor,
    bgColor: theme.backgroundColor,
  };
  return styles;
};
