const { faker } = require('@faker-js/faker');

Feature('Create Event');

Scenario('User can create an event after login', async ({ I }) => {
  // Reuse login steps
  I.amOnPage('/list-your-experience-online/login');
  I.waitForElement("//*[contains(text(),'Continue with email')]", 10);
  I.click("//*[contains(text(),'Continue with email')]");
  I.fillField("//input[@placeholder='example@email.com']", "chetantestlogin@gmail.com");
  I.click("//*[contains(text(),'Continue with email')]");
  I.waitForElement("//*[contains(text(),' Sign in')]", 10);
  I.fillField("//input[@id='login-password']", "Xyz@1234");
  I.click("//*[contains(text(),'Sign in')]");
  I.waitForElement("//*[contains(text(),'Hi,  Chetan')]", 10);

  // Go to event dashboard
  I.amOnPage('/list-your-experience-online/dashboard/event');
  I.waitForElement('#create', 10);
  I.click('#create');

  // Generate random 2 words for spot name
  const spotName = 'Chetan test ' + faker.word.words(2);
  I.fillField('#spot-name', spotName);

  // Fill location
  I.fillField('#location', 'pune');
  I.pressKey('ArrowDown');
  I.pressKey('Enter');
  I.click('#location-save');

  // Wait for addLink class to be visible
  I.waitForElement('.addLink', 10);
  I.seeElement('.addLink');
  console.log('Event created successfully!');
});