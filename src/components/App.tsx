import { Provider } from "react-redux";
import { store } from "../store";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";

import Home from "./Home";
import { Navbar, NavbarLogo } from "../styles";
import logo from "../assets/hacker-news.svg";

const persistor = getPersistor();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar>
          <NavbarLogo src={logo} />
        </Navbar>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
