class PublishEvent {
  async run(I) {
    I.click("#preview");
    I.waitForElement("#take-it-live", 30);
    I.wait(5);

    // Assertions
    I.seeElement("#take-it-live");
    I.see("Take it live"); // Adjust text if button label is different

    // Summary log
    console.log('Preview loaded and ready to publish (Take it live button visible)!');
  }
}
module.exports = new PublishEvent();