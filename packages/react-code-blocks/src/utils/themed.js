import getTheme from './getTheme'

function themedVariants(variantProp, variants) {
  return function(props) {
    var theme = getTheme(props)

    if (props && props[variantProp] && variants) {
      var modes = variants[props[variantProp]]

      if (modes) {
        return modes[theme.mode]
      }
    }

    return ``
  }
}

export default function themed(modesOrVariant, variantModes) {
  if (typeof modesOrVariant === `string`) {
    return themedVariants(modesOrVariant, variantModes)
  }

  var modes = modesOrVariant
  return function(props) {
    var theme = getTheme(props)
    return modes[theme.mode]
  }
}
