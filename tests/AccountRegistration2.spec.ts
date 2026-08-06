/*
click myaccount 
click register
Enter all detais
verify the success message 

*/
import {test,expect} from '@playwright/test'; 
import { RegistrationPage2 } from '../pages/RegistrationPage2';
import {HomePage2} from '../pages/HomePage2'
import { TestConfig } from '../test.config';
import {RandomDataUtil} from '../utils/randomDataGenerator'

let config:TestConfig; 
let homePage:HomePage2
let registrationPage:RegistrationPage2

//hooks
test.beforeEach(async({page})=>{

    config=new TestConfig()
    page.goto(config.appUrl)

    homePage = new HomePage2(page)
    registrationPage= new RegistrationPage2(page)

})

test("user registration test @master @sanity @regression", async()=>{

    await homePage.clickMyAccount()
    await homePage.clickRegister()
    const regPageHeader = await registrationPage.verifyRegistrationPageHeader()
    expect(regPageHeader).toBeTruthy()

    await registrationPage.setFirstName(RandomDataUtil.getFirstName())
    await registrationPage.setLastName(RandomDataUtil.getRandomLastName())
    await registrationPage.setEmail(RandomDataUtil.getRandomEmail())
    await registrationPage.setPhoneNumber(RandomDataUtil.getRandomPhoneNumber())
    const password = RandomDataUtil.getRandomPassword()
    await registrationPage.setPassword(password)
    await registrationPage.setConfirmPassword(password)
    await registrationPage.acceptPrivacyPolicy()
    await registrationPage.clickButtonContinue()
    const confirmMessage=await registrationPage.getConfirmationMessage()
    expect(confirmMessage).toContain('Your Account Has Been Created!')





})

test('user registration test complete registration method @regression', async()=>{

    await homePage.clickMyAccount()
    await homePage.clickRegister()
    const regPageHeader=await registrationPage.verifyRegistrationPageHeader()
    expect(regPageHeader).toBeTruthy()

    const temppassword = RandomDataUtil.getRandomPassword
    await registrationPage.completeRegistration({firstname:RandomDataUtil.getFirstName(),
        lastname: RandomDataUtil.getRandomLastName(), 
        email: RandomDataUtil.getRandomEmail(), 
        phnumber: RandomDataUtil.getRandomPhoneNumber(), 
        password: temppassword()
    })
   const confirmationMsg= await registrationPage.getConfirmationMessage()
   expect(confirmationMsg).toBeTruthy()

})

test('user registration test complete registration method using object @regression', async()=>{

    await homePage.clickMyAccount()
    await homePage.clickRegister()
    const regPageHeader=await registrationPage.verifyRegistrationPageHeader()
    expect(regPageHeader).toBeTruthy()

    const userData = {
        firstname: RandomDataUtil.getFirstName(), 
        lastname: RandomDataUtil.getRandomLastName(), 
        email: RandomDataUtil.getRandomEmail(), 
        phnumber: RandomDataUtil.getRandomPhoneNumber(), 
        password: RandomDataUtil.getRandomPassword()
    }

   
    await registrationPage.completeRegistration(userData)
   const confirmationMsg= await registrationPage.getConfirmationMessage()
   expect(confirmationMsg).toBeTruthy()

})