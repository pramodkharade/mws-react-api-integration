// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

export const handlers = [

  http.get("/api/cart", (resolver) => {
    return HttpResponse.json({
      items: [{ id: 1, name: 'Fire of wings', price: 202 },
      { id: 2, name: 'Great Warriors of maratha', price: 200 },
      { id: 1, name: 'msw mocking', price: 102 },
      ],
      total: 504
    });
  }),
  http.post("/api/orders", async ({ request, params, cookies }) => {
    const requestBody = await request.json();
    const mockOrderResponse = { success: true, message: 'Order placed successfully!', orderData: requestBody, };
    return HttpResponse.json(mockOrderResponse)
  }),];