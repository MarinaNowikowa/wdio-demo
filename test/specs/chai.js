// const expectChai = require("chai").expect;

// describe("Chai", () => {
//   it("should show the banner container", async () => {
//     await browser.url("https://by.ebay.com/b/Fashion/bn_7000259856");
//     const promobanner = await $(
//       ".clearfix title-banner title-banner--bgcolorimg title-banner--browse"
//     );

//     await expect(promobanner).toBeDisplayed();
//   });

//   it("should show the banner title", async () => {
//     const bannerTitle = await $(".title-banner__title");
//     const bannerTitleText = await bannerTitle.getText();

//     await expect(bannerTitleText).toHaveTextContaining("Не знаете, что надеть?");
//   });

//   it("should contain link on banner button and verify its clickable", async () => {
//     const banerBtn = await $("a");
//     const tagName = await banerBtn.getTagName();

//     await expect(banerBtn).toHaveLinkContaining(
//       "https://www.ebay.com/e/ru/free-shipping-ru?_trkparms=%26clkid%3D5435501835851829578"
//     );
//     await expect(banerBtn).toBeClickable();
//     expectChai(tagName).to.equal("a");
//   });
// });
