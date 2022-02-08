import NewsContainer from "./NewsContainer";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

import { store } from "../store";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import Home from "./Home";

describe("<NewsContainer />", () => {
  let view = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={getPersistor()}>
        <PersistGate loading={null} persistor={getPersistor()}>
          <Home />
        </PersistGate>
      </PersistGate>
    </Provider>
  );

  console.log(prettyDOM(view.container));

  it("obtains and loads news", () => {
    fireEvent.click(screen.getByLabelText(/news selector/i));
    fireEvent.click(screen.getByLabelText(/angular news/i));
    screen.getByText(/loading/i);
  })
});
