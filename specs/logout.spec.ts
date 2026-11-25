
import { browser } from '@wdio/globals';

describe('FrontRow Logout Test', () => {

  it('TC13 - Verify user can logout successfully', async () => {

    try {
      // Step 1: Open Profile tab
      const profileTab = await browser.$('~Profile tab');
      await profileTab.click();
      await browser.pause(2000);

      let pageSource = await browser.getPageSource();

      // Step 2: Check if user is logged in
      if (!pageSource.includes('profile.signOutButton')) {
        throw new Error('User is not logged in. Cannot perform logout test.');
      }

      // Step 3: Locate Sign out button
      const signOutButton = await browser.$(
        '//android.widget.Button[@content-desc="Sign out"]'
      );

      await signOutButton.waitForDisplayed({ timeout: 15000 });

      // Step 4: Click Sign out
      await signOutButton.click();
      await browser.pause(3000);

      // Step 5: Verify successful logout
      pageSource = await browser.getPageSource();

      if (
        pageSource.includes('profile.signInButton') &&
        !pageSource.includes('profile.signOutButton')
      ) {
        console.log('PASS: User logged out successfully');
      } else {
        throw new Error('Logout verification failed');
      }

    } finally {
      // Step 6: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc13-logout.png'
        );

        console.log('Screenshot captured');

      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
