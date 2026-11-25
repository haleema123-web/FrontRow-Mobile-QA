
import { browser } from '@wdio/globals';

describe('FrontRow Edit Profile Test', () => {

  it('TC19 - Verify Edit Profile navigation', async () => {

    try {
      // Step 1: Open Profile tab
      await browser.$('~Profile tab').click();
      await browser.pause(2000);

      let pageSource = await browser.getPageSource();

      // Step 2: Check login status
      if (!pageSource.includes('profile.signOutButton')) {
        throw new Error('User is not logged in');
      }

      // Step 3: Locate Edit Profile button
      const editProfileButton = await browser.$(
        '~Edit profile'
      );

      await editProfileButton.waitForDisplayed({ timeout: 15000 });

      // Step 4: Click Edit Profile
      await editProfileButton.click();
      await browser.pause(3000);

      // Step 5: Verify navigation
      pageSource = await browser.getPageSource();

      console.log('Current screen:', pageSource);

      if (
        pageSource.toLowerCase().includes('edit profile') ||
        pageSource.toLowerCase().includes('profile.edit')
      ) {
        console.log('PASS: Edit Profile screen opened');
      } else {
        throw new Error('Edit Profile screen verification failed');
      }

    } finally {
      // Step 6: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc19-edit-profile.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
