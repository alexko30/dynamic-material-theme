import * as React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './ThemeConfig.styles';

class ThemeConfig extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h2>Theme Config</h2>
      </div>
    );
  }
}

export default withStyles(styles)(ThemeConfig);
