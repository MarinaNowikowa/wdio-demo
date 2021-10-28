// import {expect as expectChai} from 'chai';
const expectChai = require('chai').expect;
const WatchPage = require('../pageobjects/watch.page') ;

describe('Watches Page', () => {
   it('should show the banner container', async() => {
     await WatchPage.open();
     await expect(WatchPage.promobanner).toBeDisplayed();
   }); 

   it('should show the banner title', async() => {
   await expect(WatchPage.bannerTitle).toHaveTextContaining("Управляемые платежи: как зарегистрироваться");
   });

   it('should contain link on banner button and verify its clickable', async () => {
       
   await expect(WatchPage.banerBtn).toHaveLinkContaining('https://export.ebay.com/ru/fees-and-payments/payments/managed-payments-guide-payoneer/?utm_source=mainexport');
   await expect(WatchPage.banerBtn).toBeClickable()
   });
   
   it('should contain link on banner button and verify the new url', async () => {
    await WatchPage.banerBtn.click();

   const url = await browser.getUrl();
   expectChai(url).to.include('/ru/');
   await expect(browser).toHaveUrl('https://export.ebay.com/ru/?utm_source=ebay&utm_medium=flyout&utm_campaign=sell');
   });
});