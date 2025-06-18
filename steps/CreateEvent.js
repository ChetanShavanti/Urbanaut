const faker = require('faker');
class CreateEvent {
  async run(I) {
    I.amOnPage('/list-your-experience-online/dashboard/event');
    I.waitForElement('#create', 20);
    I.click('#create');
    I.waitForElement('#spot-name', 20);
    const EventName = 'Chetan test ' + faker.random.word(2);
    I.fillField('#spot-name', EventName);

    // Fill location with a simple retry (max 3 attempts)
    let attempts = 0;
    let locationSet = false;
    while (attempts < 3 && !locationSet) {
      attempts++;
      I.click('#location');
      I.type('pune', { delay: 300 });
      I.wait(2);
      I.pressKey('ArrowDown');
      I.pressKey('Enter');
      I.wait(1);
      I.click('//*[@id="location-save"]');
      I.wait(3);
      // Check if valid
      try {
        I.waitForElement('.addLink', 5);
        locationSet = true;
      } catch (e) {
        // retry
        I.clearField('#location');
      }
    }
    if (!locationSet) throw new Error('Location could not be set after 3 attempts');

    // Assertion: Check if the add session button is visible
    I.seeElement('.addLink');
    // Assertion: Check if the event name is filled correctly
    I.seeInField('#spot-name', EventName);

    // Summary log
    console.log(`Event "${EventName}" created and location set successfully!`);
  }
}
module.exports = new CreateEvent();