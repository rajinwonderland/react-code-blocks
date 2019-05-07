const DEFAULT_THEME_MODE = `light`
export default function getTheme(props) {
  if (props && props.theme && props.theme.mode) {
    // $FlowFixMe - cannot narrow type between input types
    return props.theme
  }

  return {
    mode: DEFAULT_THEME_MODE,
  }
}
