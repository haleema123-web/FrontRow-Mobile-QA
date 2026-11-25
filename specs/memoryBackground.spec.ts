
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Background', () => {

  it('Memory after background', async () => {

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
      const before = getMemory();

      await browser.background(10);
      await browser.activateApp(pkg);
      await browser.pause(3000);

      const after = getMemory();

      console.log('Before Background:', before, 'KB');
      console.log('After Foreground:', after, 'KB');

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-background.png'
      );
    }

  });

});
