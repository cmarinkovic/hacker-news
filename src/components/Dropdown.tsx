import {
  DownArrow,
  DropdownContainer,
  DropdownHeader,
  DropdownItemWhite,
  DropdownItemLogo,
  DropdownList,
  DropdownItemGray,
  DropdownHeaderLogo,
} from "../styles";
import angularLogo from "../assets/angular-logo.png";
import reactLogo from "../assets/react-logo.png";
import vueLogo from "../assets/vue-logo.png";
import downArrow from "../assets/down-arrow.svg";
import { useState } from "react";

import { useDetectClickOutside } from "react-detect-click-outside";

interface DropdownProps {
  option: string;
  setOption: (string) => void;
}

const Dropdown = ({ option, setOption }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const outsideClickRef = useDetectClickOutside({
    onTriggered: () => setIsOpen(false),
  });

  return (
    <DropdownContainer ref={outsideClickRef}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {!option && "Select your news"}

        {option === "angular" && <DropdownHeaderLogo src={angularLogo} />}
        {option === "angular" && "Angular"}

        {option === "reactjs" && <DropdownHeaderLogo src={reactLogo} />}
        {option === "reactjs" && "React"}

        {option === "vuejs" && <DropdownHeaderLogo src={vueLogo} />}
        {option === "vuejs" && "Vue"}

        <DownArrow src={downArrow} />
      </DropdownHeader>

      {isOpen && (
        <DropdownList>
          <DropdownItemWhite
            key="angular"
            onClick={() => {
              setOption("angular");
              setIsOpen(false);
            }}
          >
            <DropdownItemLogo src={angularLogo} />
            Angular
          </DropdownItemWhite>

          <DropdownItemGray
            key="reactjs"
            onClick={() => {
              setOption("reactjs");
              setIsOpen(false);
            }}
          >
            <DropdownItemLogo src={reactLogo} />
            React
          </DropdownItemGray>

          <DropdownItemWhite
            key="vuejs"
            onClick={() => {
              setOption("vuejs");
              setIsOpen(false);
            }}
          >
            <DropdownItemLogo src={vueLogo} />
            Vue
          </DropdownItemWhite>
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
