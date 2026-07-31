import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { DataProvider } from '../utils/dataProvider';
//Load JSON test datat logidata.josn
const jsonPath = "testdata/logindata.json";
const jsonTestData = DataProvider.getDataFromJson(jsonPath);

for (const data of jsonTestData) {
    test(`Login test with Json Data: ${data.testName} @datadriven`, async ({ page }) => {

        const config = new TestConfig()
        await page.goto(config.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page)
        loginPage.login(data.email, data.password);

        if (data.expected.toLowerCase() === 'success') {
            const myAccountPage = new MyAccountPage(page);
            const isLoggedIn = myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();
        } else {
            const errorMess = await loginPage.getLoginErrorMessage();
            expect(errorMess).toContain('Warning: No match');
        }

    })
}


    //Load csv test datat logidata.josn
    const csvPath = "testdata/logindata.csv";
    const csvTestData = DataProvider.getTestDataFromCsv(csvPath);

    for (const data of csvTestData) {
        test(`Login test with CSV Data: ${data.testName} @datadriven`, async ({ page }) => {

            const config = new TestConfig()
            await page.goto(config.appUrl);

            const homePage = new HomePage(page);
            await homePage.clickMyAccount();
            await homePage.clickLogin();

            const loginPage = new LoginPage(page)
            loginPage.login(data.email, data.password);

            if (data.expected.toLowerCase() === 'success') {
                const myAccountPage = new MyAccountPage(page);
                const isLoggedIn = myAccountPage.isMyAccountPageExists();
                expect(isLoggedIn).toBeTruthy();
            } else {
                const errorMess = await loginPage.getLoginErrorMessage();
                expect(errorMess).toContain('Warning: No match');
            }

        })
    }
