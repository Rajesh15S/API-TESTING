import { test, request, expect } from '@playwright/test'


let apicontext : any;

test.beforeAll(async({})=>{
       apicontext = await request.newContext({
            baseURL :"https://restful-booker.herokuapp.com",
            extraHTTPHeaders:{
                Accept:"application/json"
            }
        })
})


test("Get Verification",async({})=>{
      const getresponce = await apicontext.get("/booking")
     console.log(await getresponce.json())
     expect (getresponce.status()).toBe(200)
      
})

test ("get method from config ",async ({request}) =>{

const resp1 = await request.get("/booking")
console.log(await resp1.json())

})

test ("pathparameter using get method",async({request})=>{
const repo2 = await request.get("/booking/2")
console.log(await repo2.json())

})

test ("query parameter Way 1",async({request})=>{

   const repo3 = await request.get("/booking?firstname=Sally&lastname=Jones")
   console.log(await repo3.json())

})

test ("Query Para 2nd way",async ({request})=>{

const repo4 = await request.get("/booking",{
    params: {
        firstname :"Sally",
        lastname: "Jones"

    }
})
console.log(await repo4.json());

})

test ("assertion verification",async({request})=>{
const repo5 = await request.get("/booking/2")
console.log(await repo5.json());
expect (repo5.status()).toBe(200)
expect (repo5.ok()).toBeTruthy()
expect(await repo5.json()).toMatchObject({
    "firstname": "Mary",
    "lastname": "Ericsson",
    "totalprice": 260,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2020-09-11",
        "checkout": "2023-06-09"
    }
})

const jsonrepo = await  repo5.json()
expect(jsonrepo.firstname).toEqual("Mary")
});

test ("Api with UI verification",async({request,page})=>{

const GetApiUi = await request.get("https://api.demoblaze.com/entries")
 const Item = await GetApiUi.json()
 console.log(Item.Items[0].title)
 await page.goto ("https://demoblaze.com/")

await expect (page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(Item.Items[0].title)
})