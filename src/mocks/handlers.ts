import { rest } from "msw";

export const handlers = [
  rest.get(`${import.meta.env.VITE_FILMS_API_URL}`, (_req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
