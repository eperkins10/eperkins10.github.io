
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.sleep(5000)
    await (await driver).quit()
})

test('I can make and delete a movie', async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let searchBar = await driver.findElement(By.name("t"))
    
    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await searchBar.sendKeys(`dope\n`)
    
    let deleteBtn = await driver.findElement(By.name("x"))
    await deleteBtn.click()

    // This line will pause our automation so you can see your search!
    await driver.sleep(5000)
})







