
import { browser } from '@wdio/globals';
import { execSync } from 'child_process';

describe('Memory Restart', () => {

  it('Memory after restart', async () => {

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

      await browser.terminateApp(pkg);
      await browser.pause(2000);
      await browser.activateApp(pkg);
      await browser.pause(5000);

      const after = getMemory();

      console.log('Before Restart:', before, 'KB');
      console.log('After Restart:', after, 'KB');

    } finally {
      await browser.saveScreenshot(
        'C:\\Users\\HP\\frontrow\\tests\\appium\\memory-restart.png'
      );
    }

  });

});
