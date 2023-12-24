import { CssVarsTheme, Theme, ThemeOptions, experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

type spacingFunction = (factor: number) => string


// Sử dụng module augmentation để thêm thuộc tính tùy chỉnh vào theme
declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      appBarHeight: string;
      boardHeaderHeight: string;
    };
  }
}

interface CustomThemeOptions extends ThemeOptions {
  // custom theme options với thuộc tính tùy chỉnh
  trello?: {
    appBarHeight?: string
    boardHeaderHeight?: string
  };
  colorSchemes: {
    light: ThemeOptions,
    dark: ThemeOptions
  };
}

const customSpacing: spacingFunction = (factor: number) => `${8 * factor}px`

const themeOptions: CustomThemeOptions = {
  trello: {
    appBarHeight: '58px',
    boardHeaderHeight: '60px'
  },
  colorSchemes: {
    light: {
      // palette: {
      //   primary: {
      //     main: teal[500]
      //   },
      //   secondary: {
      //     main: deepOrange[500]
      //   }
      // },

      spacing: customSpacing
    },
    dark: {
      // palette: {
      //   primary: {
      //     main: cyan[500]
      //   },
      //   secondary: {
      //     main: orange[500]
      //   }
      // },
      spacing: customSpacing
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#19f5'
          }
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '.5px',
          '&:hover': {
            borderWidth: '.5px'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '1px !important'
          },
          '&:hover fieldset': {
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px !important'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    }
  }
}

const theme: Omit<Theme, 'palette'> & CssVarsTheme = extendTheme(themeOptions)

export default theme
