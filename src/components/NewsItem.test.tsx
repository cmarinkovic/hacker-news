import NewsItem from "./NewsItem";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

import { store } from "../store";
import { Provider } from "react-redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

describe("<NewsItem />", () => {
  let toggleFavorite = jest.fn();

  let view = render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={getPersistor()}>
        <NewsItem
          title = "Reign news"
          time ="2022-02-08T01:03:40.000Z"
          author = "reignauthor"
          url = {"https://reign.cl"}
          toggleFavorite = {toggleFavorite}
          isFavorite = {true}
        />
      </PersistGate>
    </Provider>
  );

  console.log(prettyDOM(view.container));

  it("renders news content", () => {
    screen.getByText(/reignauthor/i);
    screen.getByText(/ago/i);
    screen.getByText(/reign news/i);
  })

  it("toggles favorite", () => {
    fireEvent.click(screen.getByRole("img", { name: /toggle favorite/i }));
    expect(toggleFavorite).toHaveBeenCalled();
  });
});
