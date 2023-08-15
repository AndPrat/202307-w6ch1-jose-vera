import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Películas' text inside a header", () => {
      const headerText = "Películas";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const webTitle = screen.getByRole("heading", { name: headerText });

      expect(webTitle).toBeInTheDocument();
    });
  });
});
