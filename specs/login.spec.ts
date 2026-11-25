
import { browser } from '@wdio/globals';

describe('FrontRow Valid Login Test', () => {

  it('TC11 - Verify login with valid credentials', async () => {

    try {
      // Step 1: Open Profile tab
      await browser.$('~Profile tab').click();
      await browser.pause(2000);

      let pageSource = await browser.getPageSource();

      // Step 2: Sign out if already logged in
      if (pageSource.includes('profile.signOutButton')) {
        const signOutButton = await browser.$(
          '//android.widget.Button[@content-desc="Sign out"]'
        );

        await signOutButton.waitForDisplayed({ timeout: 15000 });
        await signOutButton.click();
        await browser.pause(2000);
      }

      // Step 3: Find and click Profile Sign in button
      const signInButton = await browser.$(
        '//android.widget.Button[@content-desc="Sign in"]'
      );

      await signInButton.waitForDisplayed({ timeout: 15000 });
      await signInButton.click();
      await browser.pause(2000);

      // Step 4: Enter login credentials
      const email = await browser.$('~Email');
      const password = await browser.$('~Password');

      await email.waitForDisplayed({ timeout: 15000 });
      await password.waitForDisplayed({ timeout: 15000 });

      await email.setValue('demo@frontrow.com');
      await password.setValue('password123');

      console.log('Credentials entered successfully');

      // Step 5: Click login button
      const loginButton = await browser.$(
        '//android.widget.Button[@content-desc="Sign in"]'
      );

      await loginButton.waitForDisplayed({ timeout: 15000 });
      await loginButton.click();

      await browser.pause(4000);

      // Step 6: Verify login
      await browser.$('~Profile tab').click();
      await browser.pause(2000);

      pageSource = await browser.getPageSource();

      if (
        pageSource.includes('demo@frontrow.com') &&
        pageSource.includes('profile.signOutButton')
      ) {
        console.log('PASS: Valid login successful');
      } else {
        throw new Error('Valid login verification failed');
      }

    } finally {
      // Screenshot capture
      try {
        await browser.saveScreenshot(
          'C:\\Users\\HP\\frontrow\\tests\\appium\\tc11-valid-login.png'
        );
        console.log('Screenshot captured');
      } catch (error) {
        console.log('Screenshot capture failed:', error);
      }
    }

  });

});
