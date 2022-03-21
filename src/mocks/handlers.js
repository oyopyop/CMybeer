// src/mocks/handlers.js
import { rest } from "msw";

const apiUri = "https://my-json-server.typicode.com/oyopyop/CMybeer";

export const handlers = [
  //   rest.post('/login', (req, res, ctx) => {
  //     // Persist user's authentication in the session
  //     sessionStorage.setItem('is-authenticated', 'true')

  //     return res(
  //       // Respond with a 200 status code
  //       ctx.status(200),
  //     )
  //   }),

  rest.get(`${apiUri}/beers`, (_req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "rs8GCw",
          name: "Focal Banger",
          description:
            "Focal Banger is an American India Pale Ale. We have a real love for IPAs here at Alchemist, and we strive to offer you t",
          categoryId: 3,
          imageUri:
            "https://brewerydb-images.s3.amazonaws.com/beer/rs8GCw/upload_XIcqa6-large.png",
          price: "5.14",
        },
        {
          id: "lFHjKe",
          name: "GBG Beer Week 2018",
          description:
            "When we got asked to do the official GBG Beer Week 2018 beer all we could think about was sour strawberries, sour and st",
          categoryId: 4,
          imageUri:
            "https://brewerydb-images.s3.amazonaws.com/beer/lFHjKe/upload_Gwao1A-large.png",
          price: "3.44",
        },
      ])
    );
  }),
  rest.get(`${apiUri}/categories`, (_req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 3,
          name: "North American Origin Ales",
        },
        {
          id: 4,
          name: "German Origin Ales",
        },
        {
          id: 5,
          name: "Belgian And French Origin Ales",
        },
      ])
    );
  }),
];
