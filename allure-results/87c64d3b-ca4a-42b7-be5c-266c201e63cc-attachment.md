# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDataDriven.spec.ts >> Login test with Json Data: Invalid login @datadriven
- Location: tests\LoginDataDriven.spec.ts:12:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { MyAccountPage } from '../pages/MyAccountPage';
  4  | import { TestConfig } from '../test.config';
  5  | import { HomePage } from '../pages/HomePage';
  6  | import { DataProvider } from '../utils/dataProvider';
  7  | //Load JSON test datat logidata.josn
  8  | const jsonPath = "testdata/logindata.json";
  9  | const jsonTestData = DataProvider.getDataFromJson(jsonPath);
  10 | 
  11 | for (const data of jsonTestData) {
  12 |     test(`Login test with Json Data: ${data.testName} @datadriven`, async ({ page }) => {
  13 | 
  14 |         const config = new TestConfig()
> 15 |         await page.goto(config.appUrl);
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  16 | 
  17 |         const homePage = new HomePage(page);
  18 |         await homePage.clickMyAccount();
  19 |         await homePage.clickLogin();
  20 | 
  21 |         const loginPage = new LoginPage(page)
  22 |         loginPage.login(data.email, data.password);
  23 | 
  24 |         if (data.expected.toLowerCase() === 'success') {
  25 |             const myAccountPage = new MyAccountPage(page);
  26 |             const isLoggedIn = myAccountPage.isMyAccountPageExists();
  27 |             expect(isLoggedIn).toBeTruthy();
  28 |         } else {
  29 |             const errorMess = await loginPage.getLoginErrorMessage();
  30 |             expect(errorMess).toContain('Warning: No match');
  31 |         }
  32 | 
  33 |     })
  34 | }
  35 | 
  36 | 
  37 |     //Load csv test datat logidata.josn
  38 |     const csvPath = "testdata/logindata.csv";
  39 |     const csvTestData = DataProvider.getTestDataFromCsv(csvPath);
  40 | 
  41 |     for (const data of csvTestData) {
  42 |         test(`Login test with CSV Data: ${data.testName} @datadriven`, async ({ page }) => {
  43 | 
  44 |             const config = new TestConfig()
  45 |             await page.goto(config.appUrl);
  46 | 
  47 |             const homePage = new HomePage(page);
  48 |             await homePage.clickMyAccount();
  49 |             await homePage.clickLogin();
  50 | 
  51 |             const loginPage = new LoginPage(page)
  52 |             loginPage.login(data.email, data.password);
  53 | 
  54 |             if (data.expected.toLowerCase() === 'success') {
  55 |                 const myAccountPage = new MyAccountPage(page);
  56 |                 const isLoggedIn = myAccountPage.isMyAccountPageExists();
  57 |                 expect(isLoggedIn).toBeTruthy();
  58 |             } else {
  59 |                 const errorMess = await loginPage.getLoginErrorMessage();
  60 |                 expect(errorMess).toContain('Warning: No match');
  61 |             }
  62 | 
  63 |         })
  64 |     }
  65 | 
```