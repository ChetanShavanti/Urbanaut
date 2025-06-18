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

    // Assertions
    I.seeElement("//*[contains(text(),'Instant bookings, fixed dates and times.')]");
    I.see("Instant bookings, fixed dates and times.");
    I.seeInCurrentUrl('/list-your-experience-online/dashboard');

    // Summary log
    console.log('Login successful and dashboard loaded!');
  }
}
module.exports = new Login();