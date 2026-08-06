import {Page, Locator} from '@playwright/test'; 

export class LoginPage2{
    private readonly page:Page
    private readonly txtUserName:Locator
    private readonly txtPassword:Locator
    private readonly btnLogin: Locator
    private readonly loginErrorMessage: Locator
constructor(page:Page)
{
 this.page=page; 
 this.txtUserName = page.locator('#input-email')
 this.txtPassword = page.locator('#input-password')
 this.btnLogin = page.locator('input[value="Login"]')
 this.loginErrorMessage = page.locator('#account-login div.alert-danger')
}

//action methods
async setEmail(email:string)
{
    await this.txtPassword.fill(email)
}

async setPassword(password:string)
{
    await this.txtPassword.fill(password)
}

async clickLogin()
{
    this.btnLogin.click()
}

async login(email:string, password:string)
{
    this.setEmail(email)
    this.setPassword(password)
    this.clickLogin()
}

async getLoginErrorMessage():Promise<string |null>
{
   return  this.loginErrorMessage.textContent()
}









}

