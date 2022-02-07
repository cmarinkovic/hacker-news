import Home from "./Home";
import { prettyDOM, render } from "@testing-library/react";

describe("<Home />", () => {
  let component;
  component = render(<Home />);
  test("Renders content", () => {
    console.log(prettyDOM(component.container));
  });
});
