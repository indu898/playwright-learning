const { test, expect } = require('@playwright/test');

/*
Basic structure of the tests
test('name of test', async function(){...test goes here}) -  //Anonoumous function
test('name of test', async()=>{..test goes here}) //Anonoumous function shorthand

test('first playwright test', async ({browser})=>{ }) // curly braces to make sure browser is recognized as playwright fixture.


*/
test('First Playwright test - Invalid login', async ({browser}) =>
 {
    //Create chrome instance - plugins/cookies. Used when injecting cookies into context.
    const context =  await browser.newContext()
    const page = await context.newPage()

    const username = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");

    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await username.fill('rahulshetty');
    await password.fill("secret");
    await signIn.click();
    
    //Get the nth element text
    console.log(await expect(page.locator("[style*='block']")).nth(0).toContainText('Incorrect username/password.'));

    console.log(await expect(page.locator("[style*='block']")).nth(0).toContainText('Incorrect username/password.'));



 }
 )
 test('Second Playwright test, Valid login, multiple objects', async ({page}) =>
 {
    const username = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");

    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await username.fill('rahulshettyacademy');
    await password.fill("learning");
    await signIn.click();
    //Store all text in an array - Need to run with proper wait.
    const allTitles = await page.locator(".card-body a").allTextContents();
    console.log(allTitles)
   
    //Get the nth element text
     console.log(await page.locator(".card-body a").nth(1).textContent());
   
     //Get the first element text
     console.log(await page.locator(".card-body a").first().textContent());


    
    
   

    
 }

 
 /*
 //rahulshettyacademy.com/client/auth/login
 So register here,
 log in to page
 Find the first project item
 */
 )