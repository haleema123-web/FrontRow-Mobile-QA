
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Event Details', () => {

  it('Memory during event navigation', async () => {

    const adb = 'C:\\Users\\HP\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe';
    const pkg = 'app.frontrow.qa';

    const getMemory = () => {
      const output = execSync(`"${adb}" shell dumpsys meminfo ${pkg}`, {
        encoding: 'utf8'
      });
      const match = output.match(/TOTAL PSS:\s+(\d+)/);
      if (!match) throw new Error('Memory reading failed');
      return Number(match[1]);
    };

    try {
      for (let i = 1; i <= 10; i++) {
        const event = await browser.$('~Midnight Howl Live in Brooklyn at Warsaw');
        await event.click();
        await browser.pause(2000);

        console.log(`Cycle ${i}: ${getMemory()} KB`);

        await browser.back();
        await browser.pause(2000);
      }
    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-event-details.png'
      );
    }

  });

});
