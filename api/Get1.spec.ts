import {test,expect} from '@playwright/test'



test ("Basic Get Method",async({request})=>{
const Basic = await request.get("/booking")
console.log(await Basic.json());
expect (Basic.status()).toBe(200)
}) 

test("patparameter",async({request})=>{

    const path = await request.get("/booking/3")
    console.log(await path.json())

})

test ("query par",async({request})=>{

    const query = await request.get("/booking?firstname=Sally&lastname=Jones")
    console.log(await query.json())
})

test ("query par2",async({request})=>{

    const query2 = await request.get("/booking",{

        params : {
            firstname : "Sally",
            lastname:"Jones"

        }
    })
    console.log(await query2.json())
})


test ("assertion",async({request})=>{

const verify = await request.get("/booking/7")
expect (verify.status()).toBe(200)
expect (verify.ok()).toBeTruthy()
expect(await verify.json()).toMatchObject({
      "firstname": "Mary",
    "lastname": "Smith",
    "totalprice": 172,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-06-21",
        "checkout": "2026-06-27"

}
})})

 test ("Api with Ui",async({request,page})=>{

    const ui = await request.get("https://api.demoblaze.com/entries")
    const product = await (ui.json())
    console.log (product.Items[0].title)
    await page.goto("https://demoblaze.com/")

    await  expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText((product.Items[0].title))





 })
