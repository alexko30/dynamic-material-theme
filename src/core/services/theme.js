export default class ThemeService {
  async get() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // API call emulation

    return JSON.parse(localStorage.getItem('theme-config'));
  }

  async set(config) {
    return localStorage.setItem('theme-config', JSON.stringify(config));
  }
}