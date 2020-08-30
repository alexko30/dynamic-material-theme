import { observable } from 'mobx';

import ThemeService from '../services/theme';
import initializeTheme from '../theme';

export default class ThemeStore {
  service = new ThemeService();
  @observable theme;

  initialize = async () => {
    const config = await this.service.get();

    this.setConfig(config);
  }

  setConfig = (config) => {
    this.theme = initializeTheme(config);

    this.service.set(config);
  }
}