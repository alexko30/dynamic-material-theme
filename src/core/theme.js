import { createMuiTheme } from '@material-ui/core/styles';

const defaultColors = {
  primary: '#000',
  secondary: '#373633',
  error: '#DC3545',
  header: '#373633',
  headerLink: '#fff'
};

const fontFamily = 'sans-serif';

export default function initializeTheme(config) {
  const colors = {
    ...defaultColors,
    ...(config ? config.colors : {})
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
  });
}
