import {test,expect} from '@playwright/test'

let tokenvalue;
test.beforeAll (" Chaining",async({request})=>{

const tokenresp = await request.post("https://restful-booker.herokuapp.com/auth",{
    data: {
    "username" : "admin",
    "password" : "password123"
}
})
  const tokenvalue = (await tokenresp.json()).token
  console.log(tokenvalue)
})

test ("chaining put",async({request})=>{

const putresp= await request.put("https://restful-booker.herokuapp.com/booking/1",{
    headers :{

        Cookie:"token" + tokenvalue
    },
    data :{

        "firstname" : "James",
    "lastname" : "anderson",
    "totalprice" : 151,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
    }
})
      expect (putresp.status()).toBe(200)
})

test ("delete",async({request})=>{

    const deleteresp = request.delete("https://restful-booker.herokuapp.com/booking/1",{

        headers: {
            Cookie:"token" + tokenvalue
        }
    })
    expect((await deleteresp).status()).toBe(201)


})