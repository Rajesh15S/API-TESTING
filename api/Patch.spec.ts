import {test, expect} from '@playwright/test'

test ("Patch verification",async ({request})=>{


const patcchresp = await request.patch("/booking/6",{

    headers : {
              Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    data: {
        "firstname": "Ben",
    "lastname": "stokes",
    }
})

   console.log(await patcchresp.json())
   expect(patcchresp.status()).toBe(200)

})

