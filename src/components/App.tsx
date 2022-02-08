import { Provider } from "react-redux";
import { store } from "../store";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

import Home from "./Home";
import { Navbar, NavbarLogo } from "../styles";
import logo from "../assets/hacker-news.svg";
import React from "react";

const persistor = getPersistor();

/**
 * Main component of the application.
 *
 * @component
 */
function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar>
            <NavbarLogo alt="Hacker news logo." src={logo} />
          </Navbar>
          <Home />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
