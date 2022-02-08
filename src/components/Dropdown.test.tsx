import Dropdown from "./Dropdown";
import { render, prettyDOM, screen, fireEvent } from "@testing-library/react";

describe("<Dropdown/>", () => {
  const setOption = jest.fn();

  const view = render(<Dropdown option="" setOption={setOption} />);

  console.log(prettyDOM(view.container));

  it("renders the options", () => {
    fireEvent.click(screen.getByLabelText(/news selector/i));
    screen.getByText(/angular/i);
    screen.getByText(/react/i);
    screen.getByText(/vue/i);
  });

  it("changes the option", () => {
    fireEvent.click(screen.getByLabelText(/news selector/i));
    fireEvent.click(screen.getByLabelText(/angular news/i));
    expect(setOption).toHaveBeenCalled();
  });
});
