import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const news = createModel<RootModel>()({
  state: {},
  reducers: {
    toggleFavorite: (state, payload: "string") => {
      const currentState = { ...state };

      if (currentState[payload]) {
        currentState[payload] = !currentState[payload];
      } else {
        currentState[payload] = true;
      }
      return currentState;
    },
  },
});
