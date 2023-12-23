import { ThemeOptions, experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

type spacingFunction = (factor: number) => string

interface CustomThemeOptions extends ThemeOptions {
  colorSchemes: {
    light: ThemeOptions,
    dark: ThemeOptions
  };
}

const customSpacing: spacingFunction = (factor: number) => `${8 * factor}px`

const themeOptions: CustomThemeOptions = {
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500]
        },
        secondary: {
          main: deepOrange[500]
        }
      },
      spacing: customSpacing
    },
    dark: {
      palette: {
        primary: {
          main: cyan[500]
        },
        secondary: {
          main: orange[500]
        }
      },
      spacing: customSpacing
    }
  }
}

const theme = extendTheme(themeOptions)

export default theme
