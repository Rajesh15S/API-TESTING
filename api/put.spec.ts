import {test,expect} from '@playwright/test'

test("Put Method Verification", async ({ request }) => {
  // Step 1: Create a booking first
  const createResp = await request.post("/booking", {
    data: {
      "firstname": "Joe",
      "lastname": "root",
      "totalprice": 700,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2022-01-17",
        "checkout": "2025-07-05"
      },
      "additionalneeds": "Breakfast"
    }
  });
  const created = await createResp.json();
  const bookingId = created.bookingid;

  // Step 2: Update the booking
  const putresp = await request.put(`/booking/${bookingId}`, {
    headers: {
      Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    data: {
      "firstname": "Joe",
      "lastname": "root",
      "totalprice": 700,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2022-01-17",
        "checkout": "2025-07-05"
      },
      "additionalneeds": "Breakfast"
    }
  });

  expect(putresp.status()).toBe(200);
  expect(putresp.ok()).toBeTruthy();

  const resp3 = await putresp.json();
  expect(resp3).toMatchObject({
    "firstname": "Joe",
    "lastname": "root",
    "totalprice": 700,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2022-01-17",
      "checkout": "2025-07-05"
    },
    "additionalneeds": "Breakfast"
  });

  // Step 3: Verify with GET
  const respget = await request.get(`/booking/${bookingId}`);
  expect(respget.status()).toBe(200);
  const getBody = await respget.json();
  expect(getBody).toMatchObject({
    firstname: 'Joe',
    lastname: 'root',
    totalprice: 700,
    depositpaid: true,
    bookingdates: { checkin: '2022-01-17', checkout: '2025-07-05' },
    additionalneeds: 'Breakfast'
  });
});
