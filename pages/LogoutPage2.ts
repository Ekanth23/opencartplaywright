import { Page, Locator } from "@playwright/test";
import { HomePage2 } from "./HomePage2";

export class LogoutPage2{

//private readonly variables 
private readonly page:Page
private readonly btnContinue: Locator
//constructor
constructor(page:Page)
{
    this.btnContinue=page.getByText('Continue')
}
//action methods
async clickContinueButton()
{
    await this.btnContinue.click()
    return new HomePage2(this.page)
}
async isContinueButtonVisibleInLogoutPage():Promise<boolean>
{
    return await this.btnContinue.isVisible()
}


}