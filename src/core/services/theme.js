export default class ThemeService {
  async get() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // API call emulation

    return {};
  }
}