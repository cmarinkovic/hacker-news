import { useState } from "react";

import Dropdown from "./Dropdown";
import NewsContainer from "./NewsContainer";

import {
  AppBodyContainer,
  NavBtn,
  CenteredRow,
  LeftAlignedRow,
} from "../styles";

/**
 * Provides the basic UI, including controls for filtering news and favorites.
 *
 * @component
 */
const Home = () => {
  /**
   * Selected navigation button state hook.
   * @constant
   *
   * @type {[string, function]}
   */
  const [selectedNavBtn, setSelectedNavBtn] = useState<string>("all");

  /**
   * Selected option state hook.
   * @constant
   *
   * @type {[string, function]}
   */
  const [option, setOption] = useState<any>();

  return (
    <AppBodyContainer>
      <CenteredRow>
        <NavBtn
          aria-label="all"
          className={selectedNavBtn === "all" && "selected"}
          onClick={() => setSelectedNavBtn("all")}
        >
          All
        </NavBtn>
        <NavBtn
          aria-label="favorites"
          className={selectedNavBtn === "favorites" && "selected"}
          onClick={() => setSelectedNavBtn("favorites")}
        >
          Favorites
        </NavBtn>
      </CenteredRow>
      <LeftAlignedRow>
        <Dropdown option={option} setOption={setOption} />
      </LeftAlignedRow>
      <NewsContainer
        option={option}
        selectedNavBtn={selectedNavBtn}
        setSelectedNavBtn={setSelectedNavBtn}
      />
    </AppBodyContainer>
  );
};

export default Home;
