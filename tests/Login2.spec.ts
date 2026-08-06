    /**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */
import {test, expect} from '@playwright/test'
import { HomePage2 } from '../pages/HomePage2'
import { LoginPage2 } from '../pages/LoginPage2'
import {LogoutPage2} from '../pages/LogoutPage2'
import { TestConfig } from '../test.config'
import { MyAccountPage2 } from '../pages/MyAccountPage2'

let config:TestConfig
let homePage:HomePage2
let loginPage:LoginPage2
let logoutPage:LogoutPage2
let myAccountPage:MyAccountPage2

test.beforeEach(async ({page})=>{
    config= new TestConfig()
    page.goto(config.appUrl)

    homePage=new HomePage2(page)
    loginPage = new LoginPage2(page)
    logoutPage = new LogoutPage2(page)
    myAccountPage = new MyAccountPage2(page)


})
test.afterEach(async ({page})=>{
    await page.close()
})

test('user loging test @master @regression', async()=>{

    await homePage.clickMyAccount()
    await homePage.clickLogin()

    await loginPage.setEmail(config.email)
    await loginPage.setPassword(config.password)
    await loginPage.clickLogin()

    expect(await myAccountPage.verifyMyAccoutExists()).toBeTruthy()









})