import { rest } from "msw";
import { MOCK_DETAIL_RESPONSE } from "../mocks/__data_mocks__/detail.mock";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/7", (_, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(ctx.status(200), ctx.json(MOCK_DETAIL_RESPONSE));
  }),
];
