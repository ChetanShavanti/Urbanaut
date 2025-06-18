const faker = require('faker');
class DescriptionDetails {
  async run(I) {
    I.fillField("//div[@class='ql-editor ql-blank']", 'This is a test event created by Chetan ' + faker.random.word(20) + ' for testing purposes.');
    I.checkOption('#Pet-Friendly');
    I.checkOption('#Exclusive');
    I.click('#description-save');
    I.waitForElement("//*[contains(text(),'TICKET DETAILS')]", 10);
  }
}
module.exports = new DescriptionDetails();