import {test,expect} from '@playwright/test'

let tokenval;
test.beforeAll ("chaining2",async ({request})=>{

const postresponce = await request.post("https://restful-booker.herokuapp.com/auth",{
    data: {
    "username" : "admin",
    "password" : "password123"
}
})
   console.log(await postresponce.json())
   const tokenval = (await postresponce.json()).token
})

test("request chaining",async({request})=>{
const putresponse = await request.put("https://restful-booker.herokuapp.com/booking/2",{

    headers : {

          Cookie: "token" + tokenval
    },

    data : {
        "firstname": "Jimmy",
    "lastname": "Bell",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
    }
})
    

})