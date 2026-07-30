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
import { RandomDataGenerator } from '../utils/RandomDataGenerator';
import {TestConfig} from '../config/test.config';

test('user registration test', async ({ page }) => {
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);
    const testConfig = new TestConfig();
    
    await page.goto(testConfig.appUrl);
    homePage.clickMyAccount();
    registrationPage.clickRegister();

});



