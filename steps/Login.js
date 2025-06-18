class Login {
  async run(I) {
    I.amOnPage('/list-your-experience-online/login');
    I.waitForElement("//*[contains(text(),'Continue with email')]", 20);
    I.click("//*[contains(text(),'Continue with email')]");
    I.fillField("//input[@placeholder='example@email.com']", "chetantestlogin@gmail.com");
    I.click("//*[contains(text(),'Continue with email')]");
    I.waitForElement("//*[contains(text(),' Sign in')]", 10);
    I.fillField("//input[@id='login-password']", "Xyz@1234");
    I.click("//*[contains(text(),'Sign in')]");
    I.waitForElement("//*[contains(text(),'Instant bookings, fixed dates and times.')]", 20);
    console.log('Logged in successfully!');
  }
}
module.exports = new Login();