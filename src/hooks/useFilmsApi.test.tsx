import { renderHook } from "@testing-library/react";
import { mockFilms } from "../mocks/mockFilms";
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
});
