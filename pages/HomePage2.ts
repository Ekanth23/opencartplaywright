import { Page, Locator } from "@playwright/test";   

export class HomePage2{

    //Private Readonly Locator Variables
    private readonly page:Page
    private readonly lnkMyAccout:Locator
    private readonly lnkRegister: Locator
    private readonly lnkLogin : Locator
    private readonly txtSearch : Locator
    private readonly btnSearch : Locator

    //constant 
    constructor(page:Page)
    {
        this.page = page
        this.lnkMyAccout = page.locator('span:has-text("My Account")')
        this.lnkRegister = page.locator('a:has-text("Register")')
        this.lnkLogin = page.locator('a:has-text("Login")')
        this.txtSearch = page.locator('input[placeholder="Search"]')
        this.btnSearch = page.locator('#search button.btn-default')

    }

    //actionMethods
    //ishomePageExists 
    async isHomePageExists():Promise<boolean>{
        const homePageTitle=this.page.title()
        if((await homePageTitle).includes('Your Store'))
        {
            return true
        }
        return false

    }

    //clickMyAccoutn 
    async clickMyAccount()
    {
        await this.lnkMyAccout.click()
    }
    //clickRegister
    async clickLogin()
    {
       await this.lnkLogin.click()
    }
    //clickLogin
    async clickRegister()
    {
        await this.lnkRegister.click()
    }
    //enterProductName
    async enterProductName(productname: string){
        await this.txtSearch.fill(productname)
    }
    //clicSearchButton
    async clickSearchButton()
    {
        await this.btnSearch.click()
    }

    

}