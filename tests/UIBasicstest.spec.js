const { test, expect } = require('@playwright/test');

/*
Basic structure of the tests
test('name of test', async function(){...test goes here}) -  //Anonoumous function
test('name of test', async()=>{..test goes here}) //Anonoumous function shorthand

test('first playwright test', async ({browser})=>{ }) // curly braces to make sure browser is recognized as playwright fixture.


*/
test('First Playwright test', async ({browser}) =>
 {
    //Create chrome instance - plugins/cookies. Used when injecting cookies into context.
    const context =  await browser.newContext()
    const page = await context.newPage()

    await page.goTo("https://rahulshettyacademy.com/loginpagePractise");
 }
 )
 test('Second Playwright test', async ({page}) =>
 {
    // No setup required just start with page context.
    await page.goTo("https://rahulshettyacademy.com/loginpagePractise");
    
 }
 )