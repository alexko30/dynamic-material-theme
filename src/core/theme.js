import { createMuiTheme, fade } from '@material-ui/core/styles';

const defaultColors = {
  primary: '#000',
  secondary: '#373633',
  error: '#DC3545',
  headerBackground: '#373633',
  headerColor: '#ffffff',
  buttonBackgroundPrimary: '#ffffff',
  buttonColorPrimary: '#373633',
};

const fontFamily = 'sans-serif';

export default function initializeTheme(config) {
  const colors = {
    ...defaultColors,
    ...config?.colors
  };

  return createMuiTheme({
    palette: {
      colors,
      primary: {
        main: colors.primary
      },
      secondary: {
        main: colors.secondary
      },
      error: {
        main: colors.error
      }
    },
    typography: {
      fontFamily
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: colors.buttonBackgroundPrimary,
          color: colors.buttonColorPrimary,

          '&:hover': {
            backgroundColor: fade(colors.buttonBackgroundPrimary, .8),
          }
        }
      }
    }
  });
}
