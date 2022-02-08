import Home from "./Home";
import { prettyDOM, render, screen } from "@testing-library/react";
import { store } from "../store";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

describe("<Home />", () => {
  const view = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={getPersistor()}>
        <Home />
      </PersistGate>
    </Provider>
  );

  console.log(prettyDOM(view.container));

  it("displays filtering by favorites", () => {
    screen.getByText(/all/i);
    screen.getByText(/favorites/i);
  });


  it("displays filtering by news", () => {
    screen.getByText(/angular/i);
    screen.getByText(/react/i);
    screen.getByText(/vue/i);
  });
});
