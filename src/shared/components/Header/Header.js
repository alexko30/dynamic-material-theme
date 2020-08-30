import * as React from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './Header.styles';

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.root}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/theme-config">Theme config</Link>
      </header>
    );
  }
}

export default withStyles(styles)(observer(Header));
