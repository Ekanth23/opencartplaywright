import { Page, Locator } from "@playwright/test";

export class RegistrationPage2{

   //  private readonly page:Page

    //private readeonly locators 
    private readonly regPageHeader: Locator
    private readonly txtFirstName: Locator
    private readonly txtLastName: Locator
    private readonly txtEmail:Locator
    private readonly txtTelephone: Locator
    private readonly txtPassword: Locator
    private readonly txtConfirmPassword: Locator
    private readonly chkPolicy: Locator
    private readonly btnContinue: Locator
    private readonly msgConfirmation: Locator

//constructor 
constructor(page:Page)
{
    this.regPageHeader = page.locator('#content h1')
    this.txtFirstName = page.locator('#input-firstname')
    this.txtLastName = page.locator('#input-lastname')
    this.txtEmail = page.locator('#input-email')
    this.txtTelephone = page.locator('#input-telephone')
    this.txtPassword = page.locator('#input-password')
    this.txtConfirmPassword = page.locator('#input-confirm')
    this.chkPolicy = page.locator("input[type='checkbox']")
    this.btnContinue = page.locator('.btn-primary')
    this.msgConfirmation = page.locator('#content h1')

}

//ActionMethods 
async verifyRegistrationPageHeader()
{
 const regPageHeaderText = await this.regPageHeader.textContent();

    if (regPageHeaderText?.includes("Register Account")) {
        return true;
    }

    return false;
}
async setFirstName(firstName: string)
{
    await this.txtFirstName.fill(firstName)
}
async setLastName(lastName: string)
{
   await this.txtLastName.fill(lastName)
}
async setEmail(email:string)
{
   await this.txtEmail.fill(email)
}
async setPhoneNumber(phoneno: string)
{
    await this.txtTelephone.fill(phoneno)
}
async setPassword(password: string)
{
   await this.txtPassword.fill(password)
}
async setConfirmPassword(password:string)
{
   await this.txtConfirmPassword.fill(password)
}
async acceptPrivacyPolicy()
{
   await this.chkPolicy.click()
}
async clickButtonContinue()
{
   await this.btnContinue.click()
}

async isConfirmationMessageDisplayed():Promise<boolean>
{
   return await this.msgConfirmation.isVisible()
}

async getConfirmationMessage():Promise<string> 
{
   return await this.msgConfirmation.textContent() ?? '';
}

async completeRegistration(userData:{
    firstname:string, 
    lastname:string, 
    email:string, 
    phnumber:string, 
    password:string, 
}):Promise<void>
{
await this.setFirstName(userData.firstname)
await this.setLastName(userData.lastname)
await this.setEmail(userData.email)
await this.setPhoneNumber(userData.phnumber)
await this.setPassword(userData.password)
await this.setConfirmPassword(userData.password)
await this.acceptPrivacyPolicy()
await this.clickButtonContinue()
}

}

