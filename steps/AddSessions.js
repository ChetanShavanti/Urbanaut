// const faker = require('faker');
// class AddSessions {
//   async run(I) {
//     I.click('.addLink');
//     I.waitForElement("//*[contains(text(),'Add a new session')]", 20);
//     I.click('#start_date');
//     I.waitForElement('.mat-calendar-body-today', 5);
//     I.click('.mat-calendar-body-today');
//     I.click('#end_date');
//     I.waitForElement('.mat-calendar-body-today', 5);
//     I.click('.mat-calendar-body-today');
//     I.click('//*[@formcontrolname="start_at"]');
//     I.waitForElement("//*[contains(text(),'Cancel')]", 5);
//     I.click("//*[contains(text(),'Cancel')]");
//     I.fillField('//*[@formcontrolname="start_at"]', '12:00 PM', { delay: 100 });
//     I.click('//*[@formcontrolname="end_at"]');
//     I.waitForElement("//*[contains(text(),'Cancel')]", 5);
//     I.click("//*[contains(text(),'Cancel')]");
//     I.fillField('//*[@formcontrolname="end_at"]', '01:00 PM', { delay: 100 });
//     const SessionCapacity = faker.datatype.number({ min: 10, max: 100, step: 10 });
//     I.fillField('//*[@formcontrolname="session_capacity"]', SessionCapacity);
//     I.click("//*[contains(text(),' Done')]");
//     I.waitForInvisible("//*[contains(text(),' Done')]", 10);
//     I.click("//div[@class='mt-7 mb-4']//button[@class='btn btn-primary'][normalize-space()='Save']");
//     I.wait(3);
//   }
// }
// module.exports = new AddSessions();

const faker = require('faker');
const { ConsoleMessage } = require('puppeteer');
class AddSessions {
  async run(I) {
    const numESessions = faker.datatype.number({ min: 1, max: 3 });
    let startHour = 10; // Starting from 10 AM
    for (let i = 0; i < numESessions; i++) {
      I.click('.addLink');
      I.waitForElement("//*[contains(text(),'Add a new session')]", 20);
      
      // Set session time to non-overlapping 1 hour slots
      const startTime = `${startHour}:00 AM`;
      const endTime = `${startHour}:20 AM`;

      // Start Date & End Date
      I.click('#start_date');
      I.waitForElement('.mat-calendar-body-today', 5);
      I.click('.mat-calendar-body-today');
      I.wait(0.5);  
      I.click('#end_date');
      I.waitForElement('.mat-calendar-body-today', 5);
      I.click('.mat-calendar-body-today');
      I.wait(0.5);

      // Start Time & End Time
      I.click('//*[@formcontrolname="start_at"]');
      I.waitForElement("//*[contains(text(),'Cancel')]", 5);
      I.click("//*[contains(text(),'Cancel')]");
      I.fillField('//*[@formcontrolname="start_at"]', startTime, { delay: 300 });

      I.click('//*[@formcontrolname="end_at"]');
      I.waitForElement("//*[contains(text(),'Cancel')]", 5);
      I.click("//*[contains(text(),'Cancel')]");
      I.fillField('//*[@formcontrolname="end_at"]', endTime, { delay: 300 });

      // Session Capacity
      const SessionCapacity = faker.datatype.number({ min: 10, max: 100, step: 10 });
      I.fillField('//*[@formcontrolname="session_capacity"]', SessionCapacity);

      // Click on Done to add session
      I.click("//*[contains(text(),' Done')]");
      I.waitForInvisible("//*[contains(text(),' Done')]", 10);

      // Only click save after last session
      if (i === numESessions - 1) {
        I.click("//div[@class='mt-7 mb-4']//button[@class='btn btn-primary'][normalize-space()='Save']");
        I.wait(5);
      }
      startHour++;  
    }
    I.wait(5);
  }
}
module.exports = new AddSessions();