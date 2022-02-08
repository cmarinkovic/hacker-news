import Pagination from "./Pagination";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

import { store } from "../store";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

describe("<Pagination />", () => {
  let paginate = jest.fn();

  let view = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={getPersistor()}>
        <Pagination
          newsPerPage={8}
          totalNews={16}
          paginate={paginate}
          currentPage={1}
        />
      </PersistGate>
    </Provider>
  );

  console.log(prettyDOM(view.container));

  it("changes page number", () => {
    fireEvent.click(screen.getByRole("button", { name: /2/i }));
    expect(paginate).toHaveBeenCalled();
  });
});
