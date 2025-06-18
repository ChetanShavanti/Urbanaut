class AddPhotos {
  async run(I) {
    I.wait(5);
    I.waitForElement("//*[contains(text(),'FOR COVER/FIRST IMAGE')]", 10);
    I.attachFile('#upload-cover', 'testImages/img1.jpg', { delay: 1000 });
    I.waitForElement('#save-image', 10);
    I.wait(0.5);
    I.click('#save-image');
    I.wait(2);
    I.waitForElement('#delete-cover', 10);
    I.attachFile('#photo-drop input[type="file"]', 'testImages/img2.jpg', { delay: 1000 });
    I.waitForElement('#save-image', 10);
    I.wait(0.5);
    I.click('#save-image');
    I.wait(2);
    I.waitForElement('#delete-img-0', 10);
    I.click('#image-save');
    I.waitForElement("//*[contains(text(),'WHO IS IT FOR')]", 10);
  }
}
module.exports = new AddPhotos();