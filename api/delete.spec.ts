import {test,expect} from '@playwright/test'

test("Delete Method verification", async ({ request }) => {
  // Create a booking first
  const createResp = await request.post("/booking", {
    data: {
      "firstname": "John",
      "lastname": "Doe",
      "totalprice": 100,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2024-01-01",
        "checkout": "2024-01-07"
      }
    }
  });
  const created = await createResp.json();
  const bookingId = created.bookingid;

  // Now delete it
  const deleteResp = await request.delete(`/booking/${bookingId}`, {
    headers: {
      Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    }
  });
  expect(deleteResp.status()).toBe(201);
});
