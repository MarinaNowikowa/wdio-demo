// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

// import { waitForTextChange } from "../utilities/helper";
const SearchPage = require("../pageobjects/search.page");

const allureReporter = require('@wdio/allure-reporter').default;

describe("Product Search", () => {
  it("should open the main url and verify the title", async () => {
    await SearchPage.open();
    await expect(browser).toHaveTitle(
      "Электроника, автомобили, мода, коллекционирование, купоны и другие товары | eBay"
    );
    await SearchPage.getWatchesCaregoryList();
  });

  // it('should open fashion link', async () => {
  //   await SearchPage.fashionLink.moveTo();
  //   //  await browser.pause(1000);
  //   await SearchPage.watchLink.waitForDisplayed({ timeout: 1000 });
  //   await SearchPage.watchLink.click();
  // });

  it("should search for a product and verify the search text value", async () => {
    await allureReporter.addSeverity('Critical');
    await SearchPage.searchInput.addValue("ноутбук");
    await SearchPage.searchBtn.click();
    await expect(SearchPage.searchInput).toHaveValue("ноутбук");
  });

  it("should redirect to a new page and verify the title", async () => {
    await allureReporter.addAttachment('Screenshot on fail', Buffer.from(await browser.takeScreenshot(), "base64"), 'image/png');
    await expect(browser).toHaveTitle("ноутбук | eBay");
  });

  it("should update the search category", async () => {
    await allureReporter.addFeature('Search category');
    await SearchPage.category.waitUntil(async function () {
        return (await this.getText()) === 'Ноутбуки и нетбуки PC'
    }, {
        timeout: 5000
    });
    //  await SearchPage.category.waitForTextChange('Ноутбуки и нетбуки PC', 5000)
    await expect(SearchPage.category).toHaveText("Ноутбуки и нетбуки PC");
  });
});
