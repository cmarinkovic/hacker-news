import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";
import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";

const persistConfig = {
  key: "root",
  storage,
};

export const store = init({
  models,
  plugins: [persistPlugin(persistConfig)],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
