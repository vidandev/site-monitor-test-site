const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.screenshot({ path: 'screenshot.png' });
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
});