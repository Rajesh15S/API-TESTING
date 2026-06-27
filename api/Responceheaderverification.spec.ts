import {test} from '@playwright/test'

test ("Responceheaderverification.spec",async ({request})=>{

const responce = await request.get("https://restful-booker.herokuapp.com/booking/39")
const headersValue = responce.headers()
console.log(headersValue)

})

