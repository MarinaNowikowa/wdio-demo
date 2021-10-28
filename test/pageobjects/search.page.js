const Page = require("./page");

class SearchPage extends Page {
  get searchInput() {
    return $("#gh-ac");
  }
  get searchBtn() {
    return $("#gh-btn");
  }

  get category() {
    return $("#gh-cat option:nth-child(1)");
  }

  get categoryList() {
    return $$(".hl-popular-destinations-name");
  }
  get fashionLink(){
    return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
  }
  get watchLink(){
    return $$('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]')[0];
  }

  async open() {
    await super.open("https://by.ebay.com/");
  }

  async getWatchesCaregoryList() {
    await this.categoryList.map(async (el) => console.log( await el.getText()));
    }
}

module.exports = new SearchPage();
