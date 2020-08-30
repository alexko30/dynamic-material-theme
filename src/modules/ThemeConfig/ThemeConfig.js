import * as React from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';

import styles from './ThemeConfig.styles';
import { isEmpty } from 'lodash';

class ThemeConfig extends React.Component {
  state = {
    config: {},
  }

  handleChange = (e) => {
    e.persist();

    const { name, value } = e.target;
 
    this.setState((prevState) => ({ config: { ...prevState.config, [name]: value } }))
  }

  get modifiers() {
    return [
      {
        heading: 'Header background',
        property: 'headerBackground',
      },
      {
        heading: 'Header color',
        property: 'headerColor',
      },
      {
        heading: 'Button background',
        property: 'buttonBackgroundPrimary',
      },
      {
        heading: 'Button color',
        property: 'buttonColorPrimary',
      },
    ];
  }

  render() {
    const { classes, theme, setConfig } = this.props;
    
    return (
      <div className={classes.root}>
        <h2>Theme config</h2>
        <Grid container spacing={4} style={{ marginBottom: 12 }}>
          {this.modifiers.map(({ heading, property }) => {
            const value = this.state.config[property] || theme.palette.colors[property];

            return (
              <Grid item key={heading}>
                <h4 style={{ marginBottom: 4 }}>
                  {heading}: 
                  <span 
                    style={{ 
                      border: '1px solid black',
                      borderRadius: 4,
                      width: 16,
                      height: 16,
                      marginLeft: 12,
                      display: 'inline-block',
                      background: value,
                    }} 
                  />
                </h4>
                <input 
                  type="color" 
                  name={property}
                  value={value} 
                  onChange={this.handleChange} 
                />
              </Grid>
            );
          })}
        </Grid>
        <Button 
          disabled={isEmpty(this.state.config)}
          style={{ marginRight: 12, }}
          color="primary"
          variant="contained" 
          onClick={() => setConfig({ colors: this.state.config })}
        >
          Apply config
        </Button>
        <Button 
          color="primary"
          variant="contained" 
          onClick={() => window.location.reload()}
        >
          Reload App
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ThemeConfig);
