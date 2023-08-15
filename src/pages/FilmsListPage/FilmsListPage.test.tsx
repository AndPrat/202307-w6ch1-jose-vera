import { render, screen } from "@testing-library/react";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import FilmsListPage from "./FilmsListPage";

describe("Given a FilmsListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Listado de películas' inside a heading", () => {
      const headingList = "Listado de películas";

      render(
        <FilmsContextProvider>
          <FilmsListPage />
        </FilmsContextProvider>,
      );

      const title = screen.getByRole("heading", { name: headingList });

      expect(title).toBeInTheDocument();
    });
  });
});
