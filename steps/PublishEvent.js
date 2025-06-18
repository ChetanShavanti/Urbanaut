class PublishEvent {
  async run(I) {
    I.click("#preview");
    I.waitForElement("#take-it-live", 30);
    I.wait(10);
  }
}
module.exports = new PublishEvent();