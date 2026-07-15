const {test, expect} = require('@playwright/test');

test('1: Drag and Drop',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/");
    console.log(await page.title());
    await page.getByText('Drag and Drop').click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/drag_and_drop");
    await page.screenshot;
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_DragAndDrop1.png'});
    await page.locator('div#column-a').dragTo(page.locator('div#column-b'));
    await page.waitForTimeout(5000);
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_DragAndDrop2.png'});
    await page.close();
});

test('2: Infinite Scroll',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText('Infinite Scroll').click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/infinite_scroll");
    await expect(page.locator('h3')).toHaveText('Infinite Scroll');
    await page.waitForTimeout(3000);
    await page.locator('[class="jscroll-added"]');
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_InfiniteScroll1.png'});
    await page.locator("[style='text-align: center;']").hover();
    await page.mouse.wheel(0, 15000);
    await page.waitForTimeout(3000);
    const text = await page.getByText('Powered by ').textContent();
    console.log(`The extracted header text is: ${text}`);
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_InfiniteScroll2.png'});
    await page.close();
});

test('3: Dynamic Content',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/");
    console.log(await page.title());
    await page.getByText('Dynamic Content').click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/dynamic_content");
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_DynamicContent1.png'});
    const rowLocator = page.locator('#content .row');
    const rowCount = await rowLocator.count();
    console.log(`Found ${rowCount} rows`);
    const beforeTexts = [];
    for (let i = 0; i < rowCount; i++) {
    const text = (await rowLocator.nth(i).innerText()).trim();
    beforeTexts.push(text);
    }
    console.log('Before refresh:', beforeTexts);
    await page.reload();
  const afterRowLocator = page.locator('#content .row');
  const afterTexts = [];
  for (let i = 0; i < rowCount; i++) {
    const text = (await afterRowLocator.nth(i).innerText()).trim();
    afterTexts.push(text);
  }
  console.log('After refresh:', afterTexts);
 
  const changedRows = [];
  for (let i = 0; i < rowCount; i++) {
    if (beforeTexts[i] !== afterTexts[i]) {
      changedRows.push(i);
    }
  }
 
  console.log('Changed row indices:', changedRows);
  expect(changedRows.length).toBeGreaterThan(0);
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_DynamicContent2.png'});
    await page.close();
});

test('4: Slider',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/");
    console.log(await page.title());
    await page.getByText('Horizontal Slider').click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/horizontal_slider");
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_Slider1.png'});
    const slider = page.locator('input[type="range"]');
    await slider.click();
    for (let i = 0; i < 5; i++) {
    await slider.press('ArrowRight');
    }
    const displayedValue = await page.locator('#range').innerText();
    await expect(page.locator('#range')).toHaveText('5');
    console.log('Slider value after keyboard interaction:', displayedValue);
    await page.screenshot({path:'tests/screenshots_'+Date.now()+'_Slider2.png'});
    await page.close();
});
