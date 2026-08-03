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
import {test, expect} from 'playwright/test'
import { HomePage } from '../pages/HomePage'
import { SearchResultsPage} from '../pages/SearchResultsPage'; 
import { TestConfig } from '../test.config';

//declare reusable variables 
 
let config:TestConfig; 
let homePage:HomePage; 
let searchResultsPage:SearchResultsPage; 


//hooks class
test.beforeEach(async({page})=>{
    config=new TestConfig();
    page.goto(config.appUrl); 
    homePage= new HomePage(page); 
    searchResultsPage = new SearchResultsPage(page)

})
test.afterEach(async({page})=>{

    await page.close(); 
})


//test case 
test(`search and verify the products exists @master @regression`, async()=>{

    // * 2) Enter the product name and click search
    const product=config.productName
    await homePage.enterProductName(product); 
    await homePage.clickSearchButton(); 
 //step 4: Verify that the search results page is displayed 
 expect(searchResultsPage.isSearchResultsPageExists()).toBeTruthy(); 
     //step 5: Validate if the search Product apperas in the results 
     expect(searchResultsPage.isProductExist(product)).toBeTruthy()

})

