/// <reference types="node" />

//file upload :

/*

With input tag and attrtibute type="file"
Without input tag and attrtibute type="file"*/


import { test } from "@playwright/test";
import path from "path"

test("Leanr to upload the file when you have input tag in DOM",async ({page}) => {    

    await page.goto("https://leafground.com/file.xhtml");

    await page.locator('[type="file"]').nth(1).setInputFiles(path.join(__dirname,"../../Data/Qeaglelogo.png"));

    await page.waitForTimeout(3000)


})



// test.only("Learn to handle fileUpload when you dont have input tag and type='file'",async ({page}) => {
    

//     await page.goto("https://the-internet.herokuapp.com/upload");


//     const fPromise = page.waitForEvent("filechooser");

//     await page.locator('[id="drag-drop-upload"]').click();

//     const fileUpload = await fPromise

//     fileUpload.setFiles(path.join(__dirname,"../../Data/Testleaflogo.png"))

//     await page.waitForTimeout(3000)


// })