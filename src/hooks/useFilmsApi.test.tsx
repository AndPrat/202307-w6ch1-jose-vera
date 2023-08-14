import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import { mockFilms } from "../mocks/mockFilms";
import { server } from "../mocks/server";
import useFilmsApi from "./useFilmsApi";

describe("Given a useFilmsApi custom hook", () => {
  describe("When it calls a getFilmsApi", () => {
    test("Then you will receive a list of videogames", async () => {
      const { result } = renderHook(() => useFilmsApi());
      const { getFilmsApi } = result.current;

      const films = await getFilmsApi();

      expect(films).toStrictEqual(mockFilms);
    });
  });

  test("Then you will get an error 'Can't get any film'", async () => {
    server.resetHandlers(...errorHandlers);

    const expectedError = new Error("Can't get any film");
    const { result } = renderHook(() => useFilmsApi());
    const { getFilmsApi } = result.current;

    const error = getFilmsApi();

    expect(error).rejects.toThrowError(expectedError);
  });
});
