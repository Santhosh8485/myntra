
import { abort } from "node:process"
import {test , expect} from 

test("Handling Radio & CheckBoxes" , async function({page}){

    //Browser Launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Scroll
    await page.locator('[for="days"]').scrollIntoViewIfNeeded()

    // //Scroll
    // await page.$eval(()=>{
    //     Window.scroll(0, 500)    
    //})

    //Radio Approach - 1
    await page.locator('//label[text()="Female"]').click()
    await expect(page.locator('//lable[text()="Female"]')).toBeChecked()
    await page.waitForTimeout(3000)

    //Approach - 2
    await page.locator('[id="male"]').check()
    await expext(await page.locator('[id="male"]').isChecked() ).not.toBeFalsy()
    await page.waitForTimeout(3000)


    //Single Check Box
    await page.locator('[id="sunday"]').click()
    await page.waitForTimeout(3000)


    //Multiple Check Boxes
    let multiChecks = [
        page.locator('[id="tuesdsy"]') , page.locator('#thursdsy') , page.locator('id=saturday')
    ]

    for (const element of multiChecks) {
        await element.check()
        await expect(element).toBeChecked()
        awaitpage.waitForTimeout(1500)
    }


    //De Select Multiple Check Boxes
    for (const element of multiChecks) {
        await element.uncheck()
        await expect(element).not.toBeChecked()
        await page.waitForTimeout(1500)
    }

})


test("Handling Single DropDown" , async ({page})=>{

    //Browser Launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select Drop Down
    await page.locator
    
})