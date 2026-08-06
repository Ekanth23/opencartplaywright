import{Page, Locator} from "@playwright/test";
export class HomePage{

    private readonly page: Page;

    //locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;
    

    //const
    constructor(page: Page){
        this.page=page;
        this.lnkMyAccount=page.locator('span:has-text("My Account")');
        this.lnkRegister=page.locator("a:has-text('Register')");
        this.lnkLogin=page.locator("a:has-text('Login')");
        this.txtSearchBox=page.locator("input[placeholder='Search']");
        this.btnSearch=page.locator("#search button[type='button']");
    }

    //actions methods
    async isHomePageExists(): Promise<boolean>{
        let title:string=await this.page.title();
        if(title)
        {
            return true;    
        }
        return false;
    }
    async clickMyAccount(){
        try{
            await this.lnkMyAccount.click();
        }catch(error){
            console.log(`Error clicking on My Account link: ${error}`);
            throw error;
        }
    }
    async clickRegister(){
        try{
            await this.lnkRegister.click();
        }catch(error){
            console.log(`Error clicking on Register link: ${error}`);
            throw error;
        }
    }
    async clickLogin(){
        try{
            await this.lnkLogin.click();
        }catch(error){
            console.log(`Error clicking on Login link: ${error}`);
            throw error;
        }
    } 
    async enterProductName (pName: string){  
        try{
            await this.txtSearchBox.fill(pName);
        }catch(error){
            console.log(`Error entering product name: ${error}`);
            throw error;
        }
    }
    async           clickSearchButton(){
        try{
            await this.btnSearch.click();
        }catch(error){
            console.log(`Error clicking on Search button: ${error}`);
            throw error;
        }
    }
    
}