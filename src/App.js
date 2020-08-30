import * as React from 'react';
import { observer } from 'mobx-react';
import { Typography, CircularProgress } from '@material-ui/core';
import { Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import About from './modules/About';
import Contact from './modules/Contact';
import ThemeConfig from './modules/ThemeConfig';
import Header from './shared/components/Header';
import ThemeStore from './core/stores/theme';

class App extends React.Component {
  themeStore = new ThemeStore();

  constructor(props) {
    super(props);

    this.themeStore.initialize();
  }

  render() {
    if (this.themeStore.initializing) {
      return <CircularProgress />;
    }
    return (
      <MuiThemeProvider theme={this.themeStore.theme}>
        <Typography component="div">
          <Header />
          <Route 
            path="/about"
            component={About}  
          />
          <Route 
            path="/contact"
            component={Contact}  
          />
          <Route 
            path="/theme-config"
            component={ThemeConfig}  
          />
        </Typography>
      </MuiThemeProvider>
    );
  }
}

export default observer(App);
