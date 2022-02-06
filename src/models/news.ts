import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const news = createModel<RootModel>()({
  state: {},
  reducers: {
    toggleFavorite(state, payload: "string") {
      if (state[payload]) {
        state[payload] = !state[payload];
      } else {
        state[payload] = true;
      }
      return state;
    },
  },
});
