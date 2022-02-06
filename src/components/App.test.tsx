import App from "./App";
import { render, prettyDOM } from "@testing-library/react";

test("<App/>", () => {
  let component;

  component = render(<App />);
  test("Renders content", () => {
    console.log(prettyDOM(component.container));
  });
});
