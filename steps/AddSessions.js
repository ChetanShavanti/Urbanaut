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
class AddSessions {
  async run(I) {
    I.click('.addLink');
    I.waitForElement("//*[contains(text(),'Add a new session')]", 20);

    // Select start date
    I.click('#start_date');
    I.waitForElement('.mat-calendar-body-today', 5);
    I.click('.mat-calendar-body-today');

    // Select end date
    I.click('#end_date');
    I.waitForElement('.mat-calendar-body-today', 5);
    I.click('.mat-calendar-body-today');

    // Fill start time
    I.click('//*[@formcontrolname="start_at"]');
    I.waitForElement("//*[contains(text(),'Cancel')]", 5);
    I.click("//*[contains(text(),'Cancel')]");
    I.fillField('//*[@formcontrolname="start_at"]', '12:00 PM', { delay: 100 });

    // Fill end time
    I.click('//*[@formcontrolname="end_at"]');
    I.waitForElement("//*[contains(text(),'Cancel')]", 5);
    I.click("//*[contains(text(),'Cancel')]");
    I.fillField('//*[@formcontrolname="end_at"]', '01:00 PM', { delay: 100 });

    // Fill session capacity
    const SessionCapacity = faker.datatype.number({ min: 10, max: 100, step: 10 });
    I.fillField('//*[@formcontrolname="session_capacity"]', SessionCapacity);

    // Add session
    I.click("//*[contains(text(),' Done')]");
    I.waitForInvisible("//*[contains(text(),' Done')]", 10);

    // Assertion: Check if session appears in the session list  
    I.seeElement('//tbody[@class="example-list-price"]'); 

    // Save all sessions
    I.click("//div[@class='mt-7 mb-4']//button[@class='btn btn-primary'][normalize-space()='Save']");
    I.wait(3);

    // Final assertion: Check if next step/page is loaded  
    I.seeElement("//*[contains(text(),'FOR GALLERY')]");

    // Summary
    console.log(`Session added with capacity ${SessionCapacity} and saved successfully!`);
  }
}
module.exports = new AddSessions();