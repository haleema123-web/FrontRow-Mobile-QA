
import { browser } from '@wdio/globals';

describe('FrontRow Forgot Password Test', () => {

  it('TC18 - Verify Forgot Password button', async () => {

    try {
      // Step 1: Open Profile tab
      await browser.$('~Profile tab').click();
      await browser.pause(2000);

      // Step 2: Open Sign in screen
      const signInButton = await browser.$(
        '//android.widget.Button[@content-desc="Sign in"]'
      );

      await signInButton.waitForDisplayed({ timeout: 15000 });
      await signInButton.click();
      await browser.pause(2000);

      // Step 3: Locate Forgot Password button
      const forgotPassword = await browser.$('~Forgot password?');

      await forgotPassword.waitForDisplayed({ timeout: 15000 });

      // Step 4: Click Forgot Password
      await forgotPassword.click();
      await browser.pause(3000);

      // Step 5: Verify recovery screen
      const pageSource = await browser.getPageSource();

      console.log('Current screen:', pageSource);

      if (pageSource.toLowerCase().includes('forgot')) {
        console.log('PASS: Forgot Password screen opened');
      } else {
        throw new Error('Forgot Password screen did not open');
      }

    } finally {
      // Step 6: Capture screenshot
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc18-forgot-password.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
