describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should increment the counter after tap', async () => {
    await element(by.id('Highlight')).tap();
    await element(by.id('Button')).tap();
    await expect(element(by.text('You clicked me 2 times'))).toBeVisible();
  });
  
  it('should increment the counter after multiple taps', async () => {
    await element(by.id('Highlight')).multiTap(5);
    await element(by.id('Button')).multiTap(5);
    await expect(element(by.text('You clicked me 10 times'))).toBeVisible();
  });

  it('should increment the counter after long press', async () => {
    await element(by.id('Highlight')).longPress();
    await element(by.id('Button')).longPress();
    await expect(element(by.text('You clicked me 2 times'))).toBeVisible();
  });

  it('should reset counter after tap', async () => {
    await element(by.id('Opacity')).tap();
    await expect(element(by.text('You clicked me 0 times'))).toBeVisible();
  });

  it('should reset counter after multiple taps', async () => {
    await element(by.id('Opacity')).tap();
    await expect(element(by.text('You clicked me 0 times'))).toBeVisible();
  });

  it('should reset counter after long press', async () => {
    await element(by.id('Opacity')).longPress();
    await expect(element(by.text('You clicked me 0 times'))).toBeVisible();
  });
});
