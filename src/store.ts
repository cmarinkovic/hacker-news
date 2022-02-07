import persist from "@rematch/persist";
import storage from "redux-persist/lib/storage";
import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";

export const store = init<RootModel>({
  models,
  plugins: [
    persist({
      key: "root",
      storage,
      whitelist: ["news"],
    }),
  ],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
