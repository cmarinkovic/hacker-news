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

/**
 * Enables selecting news to filter.
 *
 * @component
 */
const Dropdown = ({ option, setOption }: DropdownProps) => {
  /**
   * Is dropdown open state hook.
   * @constant
   *
   * @type {[string, function]}
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Custom hook to detect if user clicks outside the dropdown.
   * @constant
   *
   * @type {[object, function]}
   */
  const outsideClickRef = useDetectClickOutside({
    onTriggered: () => setIsOpen(false),
  });

  return (
    <DropdownContainer ref={outsideClickRef}>
      <DropdownHeader aria-label="News selector." onClick={() => setIsOpen(!isOpen)}>
        {!option && "Select your news"}

        {option === "angular" && <DropdownHeaderLogo src={angularLogo} />}
        {option === "angular" && "Angular"}

        {option === "reactjs" && <DropdownHeaderLogo src={reactLogo} />}
        {option === "reactjs" && "React"}

        {option === "vuejs" && <DropdownHeaderLogo src={vueLogo} />}
        {option === "vuejs" && "Vue"}

        <DownArrow alt="Expand options." src={downArrow} />
      </DropdownHeader>

      {isOpen && (
        <DropdownList>
          <DropdownItemWhite
            key="angular"
            aria-label="Angular news."
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
            aria-label="React news."
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
            aria-label="Vue news."
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
