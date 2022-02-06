import { useState } from "react";

import Dropdown from "./Dropdown";
import NewsContainer from "./NewsContainer";

import {
  AppBodyContainer,
  NavBtn,
  CenteredRow,
  LeftAlignedRow,
} from "../styles";

const Home = () => {
  const [selectedNavBtn, setSelectedNavBtn] = useState<string>("all");
  const [option, setOption] = useState<any>();

  return (
    <AppBodyContainer>
      <CenteredRow>
        <NavBtn
          className={selectedNavBtn === "all" && "selected"}
          onClick={() => setSelectedNavBtn("all")}
        >
          All
        </NavBtn>
        <NavBtn
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
