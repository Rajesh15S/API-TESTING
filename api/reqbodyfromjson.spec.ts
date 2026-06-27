import {test,expect} from '@playwright/test'


test ("Api testing - pass request body fron json",async ({request})=>{


    const resppost = await request.post("https://restful-booker.herokuapp.com/booking",{
        data : {    
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
})

   const jresp = await resppost.json()
    expect (jresp.booking).toMatchObject({
    "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
})
     expect(jresp.booking.additionalneeds).toEqual("Breakfast")

})