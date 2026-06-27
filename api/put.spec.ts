import {test,expect} from '@playwright/test'

test ("Put Methid Verification",async({request})=>{

const putresp = await request.put("/booking/6",{
    headers : {
        Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },

     data : {
     "firstname": "Joe",
    "lastname": "root",
    "totalprice": 700,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2022-01-17",
        "checkout": "2025-07-05"
    }
}})
const resp3 = await putresp.json()
console.log(resp3)

expect (putresp.status()).toBe(200)
expect (putresp.statusText()).toBe("OK")
expect (putresp.ok()).toBeTruthy()
expect(await resp3).toMatchObject({
    "firstname": "Joe",
    "lastname": "root",
    "totalprice": 700,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2022-01-17",
        "checkout": "2025-07-05"}
})

   expect (await resp3.lastname).toEqual("root")

   const respget = await request.get("https://restful-booker.herokuapp.com/booking/6")
   console.log(await respget.json())
   expect (await respget.json()).toMatchObject({
    
  firstname: 'Joe',
  lastname: 'root',
  totalprice: 700,
  depositpaid: true,
  bookingdates: { checkin: '2022-01-17', checkout: '2025-07-05' },
  additionalneeds: 'Breakfast'

   })

})



