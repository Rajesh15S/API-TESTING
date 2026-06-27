import {test,expect} from '@playwright/test'

test ("Delete Method verification",async ({request})=>{

const deleteResp = await request.delete("https://restful-booker.herokuapp.com/booking/38")
expect(await deleteResp.status()).toBe(201)






})