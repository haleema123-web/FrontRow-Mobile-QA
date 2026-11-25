
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Image Reload', () => {
  it('Reload event image repeatedly', async () => {
    const adb = 'C:\\Users\\HP\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe';
    const pkg = 'app.frontrow.qa';

    const getMemory = () => {
      const output = execSync(`"${adb}" shell dumpsys meminfo ${pkg}`, { encoding: 'utf8' });
      const match = output.match(/TOTAL PSS:\s+(\d+)/);
      if (!match) throw new Error('Memory reading failed');
      return Number(match[1]);
    };

    try {
      for (let i = 1; i <= 10; i++) {
        await browser.$('~Navigate up').click();
        await browser.$('~Midnight Howl Live in Brooklyn at Warsaw').click();
        await browser.pause(2000);

        console.log(`Cycle ${i}: ${getMemory()} KB`);
      }
    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-image-reload.png'
      );
    }
  });
});
