const fetch = require("node-fetch");

module.exports = class Nekobot {
  constructor() {
    this.baseURL = "https://nekobot.xyz/api";
  }
  async image(type) {
    try {
      const response = await fetch(`${this.baseURL}/image?type=${type}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};
