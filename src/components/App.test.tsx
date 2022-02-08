import App from "./App";
import { render, prettyDOM, screen } from "@testing-library/react";

describe("<App/>", () => {
  let view = render(<App />);

  console.log(prettyDOM(view.container));

  it("displays filtering by favorites", () => {
    screen.getByText(/all/i);
    screen.getByText(/favorites/i);
  });
});
