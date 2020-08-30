import * as React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './Contact.styles';

class Contact extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h2>Contact us</h2>
        <a href="tel:+585 99 989">+585 99 989</a>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
