import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Películas' text inside a heading", () => {
      const expectedTitle = "Películas";

      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilmsContextProvider>,
      );

      const headerTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
