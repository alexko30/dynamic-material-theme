import { observable } from 'mobx';

import ThemeService from '../services/theme';
import initializeTheme from '../theme';
import { isEmpty } from 'lodash';

export default class ThemeStore {
  service = new ThemeService();
  theme = observable({});

  get initializing() {
    return isEmpty(this.theme);
  }

  initialize = async () => {
    const config = await this.getConfig();

    this.setConfig(config);
  }

  getConfig = () => {
    return this.service.get();
  }

  setConfig = (config) => {
    this.theme = initializeTheme(config);
  }
}