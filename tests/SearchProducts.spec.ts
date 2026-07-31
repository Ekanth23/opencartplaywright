/**
 * Test Case: Product Search
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Enter the product name in the search field
 * 3) Click the search button
 * 4) Verify if the product is displayed in the search results
 */
//import 
import {test, expect} from '@playwright/test'; 
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage'; 

//declare reusable variables 
let config:TestConfig; 
let homePage: HomePage; 
let searchResultPage: SearchResultsPage; 

//hooks class
test.beforeEach(async({page})=>{

    config = new TestConfig(); 
    page.goto(config.appUrl); 

    homePage= new HomePage(page)
    searchResultPage = new SearchResultsPage(page)

})

test.afterEach(async({page})=>{
    await page.close();
})

test('Product search test @master @regression', async()=>{

    // * 2) Enter the product name and click search
    const productName = config.productName;

    await homePage.enterProductName(productName);
    await homePage.clickSearchButton();

    //step 4: Verify that the search results page is displayed 
    expect(await searchResultPage.isSearchResultsPageExists()).toBeTruthy(); 

    //step 5: Validate if the search Product apperas in the results 
    const isProductFound=await searchResultPage.isProductExist(productName)
    expect(isProductFound).toBeTruthy(); 



})