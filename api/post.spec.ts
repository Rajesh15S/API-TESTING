import {expect, test} from '@playwright/test'


test ("Post method verification", async ({request})=>{

    const post = await request.post("/booking",{
        data : {
            "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
        }
    })
    const respBody = await post.json()
    console.log (respBody)

    expect (post.status()).toBe(200)
    expect (post.ok()).toBeTruthy()
    expect (post.statusText()).toBe("OK")
    expect (respBody.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'

    })
    expect (respBody.booking.additionalneeds).toEqual("Breakfast")
})

test ("Api with Ui verification",async({request})=>{
     const resp2 = await request.post("https://api.demoblaze.com/addtocart",{

        data : {"id":"e10118b0-0464-fc48-5393-37a6530186d0","cookie":"user=7a9992ff-6524-7ffc-94d6-48fe67de435a; _dd_s=logs=1&id=e2083dae-3e2b-4c9d-886a-606550d2ab73&created=1782549249975&expire=1782550199004","prod_id":3,"flag":false}
     })

     expect (resp2.status()).toBe(200)

})