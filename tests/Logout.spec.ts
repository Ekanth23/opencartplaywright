/**
 * Test Case: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */

import{test, expect} from '@playwright/test'; 
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';
import { MyAccountPage } from '../pages/MyAccountPage';

let config:TestConfig; 
let homePage : HomePage; 
let loginPage : LoginPage; 
let logoutPage : LogoutPage; 
let myAccountPage : MyAccountPage; 

test.beforeEach(async ({page}) =>{

     // 1) Navigate to the application URL
    config = new TestConfig();
    page.goto(config.appUrl);
    
    homePage=new HomePage(page)
    loginPage = new LoginPage(page)
    myAccountPage = new MyAccountPage(page)
    logoutPage = new LogoutPage(page)

})

test.afterEach(async({page})=>{
    page.close()
})

test('logout validation @master @regression', async()=>{

 // 2) Go to Login page from Home 
 await homePage.clickMyAccount()
 await homePage.clickLogin()
 // 3) Login with valid credentials
 await loginPage.login(config.email, config.password)
 // 4) Verify 'My Account' page
 expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy()
 // 5) Click on Logout, which return LogoutPage instance
 logoutPage=await myAccountPage.clickLogout()
 // 6) verify "continue" button is visible before 
 expect(await logoutPage.isContinueButtonVisible()).toBe(true)
 // 7) click continue buttonand verify redirected to 
 homePage=await logoutPage.clickContinue(); 
 expect (await homePage.isHomePageExists()).toBe(true)

})