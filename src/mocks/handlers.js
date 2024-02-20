// src/mocks/handlers.js
import { setupServer } from 'msw/browser';

import { http, HttpResponse } from 'msw';

export const handlers = [
  // Define your request handlers here
  // Example handler:
  http.get('/api/cart', (resolver) => {
    return HttpResponse.json({
      items: [
        {
          id: 1,
          name: 'Fire of wings',
          price: 202
        },
        {
          id: 2,
          name: 'Great Warriors of maratha',
          price: 200
        },
        {
          id: 1,
          name: 'msw mocking',
          price: 102
        },
      ],
      total: 504

    })
  })
];
