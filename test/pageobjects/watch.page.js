const Page = require("./page");

class WatchPage extends Page {
  get promobanner() {
    return $('.block-big-picture-banner__inner');
  }
  get bannerTitle() {
    return $('.block-big-picture-banner__title');
  }

  get banerBtn() {
    return $('.block-big-picture-banner__button');
  }

  async open() {
    await super.open('https://export.ebay.com/ru/?utm_source=ebay&utm_medium=flyout&utm_campaign=sell');
  }

}

module.exports = new WatchPage();
