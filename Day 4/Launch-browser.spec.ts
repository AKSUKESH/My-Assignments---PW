import { chromium,firefox,test, webkit } from "@playwright/test"

test("Learn to Launch a Browser", async()=>{

const browser = await chromium.launch({headless:false,channel:"chrome"})// browser
// const browser = await webkit.launch()// browser
// const browser = await firefox.launch()// browser
const context = await browser.newContext() //( similar to window with special chara.)
const page = await context.newPage() // opening a page inside a context(special window with certain characteristics)

await page.goto("https://login.salesforce.com/?locale=in");

const url = page.url();

console.log(url);

const title = await page.title()

console.log(title);

await page.waitForTimeout(3000) // demo // visibilty purpose



} )