
import { browser } from '@wdio/globals';

describe('FrontRow Search Functionality Test', () => {

  it('TC23 - Verify search field accepts and clears text', async () => {

    try {
      const eventsTab = await browser.$('~Events tab');
      await eventsTab.click();
      await browser.pause(2000);

      const searchField = await browser.$('~Search events');
      await searchField.waitForDisplayed({ timeout: 15000 });

      // Enter search text
      await searchField.setValue('Midnight Howl');
      await browser.pause(2000);

      const enteredText = await searchField.getText();

      if (enteredText.includes('Midnight Howl')) {
        console.log('PASS: Search field accepts text');
      } else {
        throw new Error('FAIL: Search field did not accept text');
      }

      // Clear search text
      await searchField.clearValue();
      await browser.pause(1500);

      const clearedText = await searchField.getText();

      console.log('Text after clearing:', clearedText);

      if (
        clearedText === '' ||
        clearedText === 'Search shows, artists, cities…'
      ) {
        console.log('PASS: Search field clears successfully');
      } else {
        throw new Error('FAIL: Search field did not clear');
      }

    } finally {
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc23-search-functionality.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
