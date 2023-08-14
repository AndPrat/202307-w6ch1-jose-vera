import { rest } from "msw";
import { mockFilms } from "./mockFilms";

export const handlers = [
  rest.get(`${import.meta.env.VITE_FILMS_API_URL}films`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFilms));
  }),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_FILMS_API_URL}films`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get any film"));
  }),
];
