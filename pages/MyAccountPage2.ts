/*
import 
export class 
    declare private readonly
    constructor 
    action methods  


*/

import {Page, Locator} from '@playwright/test'

export class MyAccountPage2
{
    //private readonly variables 
    private readonly page:Page
    private readonly myAccountPageHeader: Locator
    private readonly lnkLogout: Locator
    //constructor 
    constructor(page:Page)
    {
        this.myAccountPageHeader = page.locator('#content h2')
        this.lnkLogout = page.locator('#column-right a:last-of-type')
    }

    async verifyMyAccoutExists()
    {
          const myAccountHeader=await this.myAccountPageHeader.textContent()
          if(myAccountHeader?.includes('My Account'))
          {
            return true
          } else
          {
            return false
          }

    }

    async clicLogoutLink()
    {
        await this.lnkLogout.click()
    }














}