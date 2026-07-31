/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { DataProvider } from '../utils/dataProvider';
import { RandomDataGenerator } from '../utils/randomDataGenerator'
import { TestConfig } from '../test.config';

let homePage: HomePage;
let regPage: RegistrationPage;
let config:TestConfig; 

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    regPage = new RegistrationPage(page);


})

test.afterEach(async({page})=>{
    await page.close(); 
})

test('user registration test @master @sanity @regression', async ({ page }) => {


    await homePage.clickMyAccount();
    await homePage.clickRegister();
    await regPage.setFirstName(RandomDataGenerator.getFirstName())
    await regPage.setLastName(RandomDataGenerator.getRandomLastName())
    await regPage.setEmail(RandomDataGenerator.getRandomEmail());
    await regPage.setTelephone(RandomDataGenerator.getRandomPhoneNumber());
    const password = RandomDataGenerator.getRandomPassword();
    await regPage.setPassword(password);
    await regPage.setConfirmPassword(password);
    await regPage.acceptPrivacyPolicy();
    await regPage.clickContinue();
    const confirmationMessage = await regPage.isConfirmationMessageDisplayed();
    console.log(confirmationMessage);
    expect(confirmationMessage).toContain('Created!');
    await page.waitForTimeout(3000);




});



