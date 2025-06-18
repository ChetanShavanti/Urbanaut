const faker = require('faker');
class DescriptionDetails {
  async run(I) {
    const descriptionText = 'This is a test event created by Chetan ' + faker.random.word(20) + ' for testing purposes.';
    I.fillField("//div[@class='ql-editor ql-blank']", descriptionText);
    I.checkOption('#Pet-Friendly');
        I.seeCheckboxIsChecked('#Pet-Friendly');
    I.checkOption('#Exclusive');
        I.seeCheckboxIsChecked('#Exclusive');
    I.click('#description-save');
    I.waitForElement("//*[contains(text(),'TICKET DETAILS')]", 10);


    // Summary log
    console.log('Description, options, and navigation to TICKET DETAILS verified successfully!');
  }
}
module.exports = new DescriptionDetails();