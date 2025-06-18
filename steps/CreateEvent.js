// const faker = require('faker');
// class CreateEvent {
//   async run(I) {
//     I.amOnPage('/list-your-experience-online/dashboard/event');
//     I.waitForElement('#create', 20);
//     I.click('#create');
//     I.waitForElement('#spot-name', 20);
//     const EventName = 'Chetan test ' + faker.random.word(2);
//     I.fillField('#spot-name', EventName);

//     // Fill location
//     I.click('#location');
//     I.type('pune', { delay: 500 });
//     I.wait(6);
//     I.pressKey('ArrowDown', { delay: 400 });
//     I.pressKey('Enter', { delay: 400 });
//     I.wait(3);
//     I.click('//*[@id="location-save"]');
//     //here check if ".ng-invalid .error" is present then redo all from fill location till '.ng-valid .ng-touched" is visible at this step
//     I.waitForElement('.addLink', 20);
//     I.seeElement('.addLink');
//     I.wait(2);
//   }
// }
// module.exports = new CreateEvent();

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

    I.seeElement('.addLink');
  }
}
module.exports = new CreateEvent();