const faker = require('faker');
class TicketDetails {
  async run(I) {
    I.wait(2);
    I.waitForElement("//*[contains(text(),'Add a ticket type')]", 10);
    I.click("//*[contains(text(),'Add a ticket type')]");
    I.wait(2);
    I.waitForElement("#price-0", 10);
    const ticketLabel = 'Test Ticket ' + faker.random.word(1);
    I.fillField('#label', ticketLabel);
    const TicketPrice = faker.datatype.number({ min: 10, max: 100, step: 10 });
    I.fillField('#price-0', TicketPrice);
    I.click('#price-save');
    I.waitForInvisible('#price-save', 10);

    I.fillField('//*[@formcontrolname="price_starts_at"]', TicketPrice);
    I.click("#ticket-save");
    I.wait(2);
    I.waitForElement(".ql-editor", 10);
    I.click(".ql-editor");
    I.type("NO Refunds");
    I.wait(2);

    I.waitForElement("//app-refund[@class='ng-star-inserted']//button[@class='btn btn-primary'][normalize-space()='Save']", 10);
    I.click("//app-refund[@class='ng-star-inserted']//button[@class='btn btn-primary'][normalize-space()='Save']");
    I.wait(2);

    I.waitForElement("#promo-save", 10);
    I.click("#promo-save");

    I.waitForElement("//*[contains(text(),'ORGANIZER CONTACTS')]", 10);

    I.fillField('#on-ground-name-0', 'Chetan Shavanti');
    I.fillField('#on-ground-phone-0', '7276894197');
    I.fillField('//*[@type="email"]', 'chetanshavanti27@gmail.com');
    I.click('#advance-save');
    I.wait(2);

    // Summary log
    console.log(`Ticket "${ticketLabel}" with price ${TicketPrice} and organizer details saved successfully!`);
  }
}
module.exports = new TicketDetails();