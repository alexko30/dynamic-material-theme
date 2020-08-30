import { createStyles } from '@material-ui/core';

export default ({ palette: { colors } }) => createStyles({
  root: {
    background: colors.headerBackground,
    padding: 24,
    borderRadius: 4,

    '& a': {
      margin: '0 12px',
      color: colors.headerColor
    }
  },
});
