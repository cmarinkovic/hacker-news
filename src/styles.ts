import styled from "styled-components";

export const AppBodyContainer = styled.div`
  margin-left: 10.42vw;
  margin-right: 10.42vw;
`;

export const Navbar = styled.div`
  height: 12.63vh;
  min-height: 70px;
  margin: 0 0 7.75vh;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
`;

export const NavbarLogo = styled.img`
  height: 2.7vh;
  min-height: 20px;
  margin: 4.3vh 75.14vw 4.1vh 9.6vw;
  @media (max-height: 600px) {
    margin: 20px 75.14vw 20px 9.6vw;
  }
`;

export const NavBtn = styled.button`
  width: 98px;
  height: 31px;
  border-radius: 2px;
  border: solid 1px #606060;
  color: #606060;
  background-color: transparent;
  font-size: 14px;
  font-family: "Roboto Medium", sans-serif;

  &:hover {
    border: solid 1px #1797ff;
    color: #1797ff;
    cursor: pointer;
  }

  &.selected {
    border: solid 1px #1797ff;
    color: #1797ff;
  }
`;

export const LeftAlignedRow = styled.div`
  display: flex;
  justify-content: left;
`;

export const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const DropdownContainer = styled.div`
  width: 16.67vw;
  min-width: 150px;
  margin-top: 6.15vh;
  margin-left: 1.4vw;
  cursor: pointer;
`;

export const DownArrow = styled.img`
  position: absolute;
  width: 28vw;
  min-width: 220px;
  overflow: hidden;
  height: 14px;
  margin-top: 2px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  padding: 5px 0 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  font-size: 14px;
  color: #343434;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    border: solid 1px #1797ff;
  }

  &:hover ${DownArrow} {
    filter: invert(48%) sepia(20%) saturate(4789%) hue-rotate(185deg) brightness(99%) contrast(105%);
    cursor: pointer;
  }
}

@media screen and (max-width: 600px) {
  font-size: 12px;
}
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 16.67vw;
  min-width: 150px;
  margin-top: 0;
  padding: 5px 0 12px 12px;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 #dad8d8;
`;

export const DropdownItemWhite = styled.li`
  list-style: none;
  padding-top: 1.45vh;
  padding-bottom: 1.45vh;
  font-size: 14px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const DropdownItemGray = styled.li`
  list-style: none;
  padding-top: 1.45vh;
  padding-bottom: 1.45vh;
  font-size: 14px;
  background-color: #fcfcfc;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const DropdownItemLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 13px;

  @media screen and (max-width: 600px) {
    width: 18px;
    height: 18px;
  }
`;

export const DropdownHeaderLogo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 13px;
`;

export const SNewsContainer = styled.div`
  display: flex;
  min-width: 400px;
  margin-right: 0;
  margin-bottom: 9.4vh;
  flex-wrap: wrap;
`;

export const NewsItemContainer = styled.div`
  width: 45%;
  height: 8.8vh;
  min-height: 90px;
  min-width: 400px;
  margin-top: 3.7vh;
  margin-left: 1.4vw;
  margin-right: 1.4vw;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
`;

export const FavoriteContainer = styled.div`
  height: 100%;
  width: 12.36%;
  margin-left: auto;
  border-radius: 6px;
  border: solid 1px #f5f5f5;
  background-color: #f5f5f5;
`;

export const FavoriteIcon = styled.img`
  width: 100%;
  height: 2.7vh;
  min-height: 20px;
  margin: 35px 22px 33px 0;
  cursor: pointer;
`;

export const NewsTitle = styled.span`
  position: absolute;
  width: 28vw;
  height: 40px;
  min-height: 50px;
  margin: 5.52vh 5.8vw 1.37vh 1.8vw;
  font-family: "Roboto Medium", sans-serif;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #828282;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const NewsInfoContainer = styled.div`
  display: flex;
  position: absolute;
  top: -20px;
  border-radius: 6px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const NewsInfo = styled.span`
  height: 13px;
  margin-left: 10px;
  font-family: "Roboto Medium", sans-serif;
  font-size: 11px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #828282;

  @media screen and (max-width: 600px) {
    font-size: 9px;
  }
`;

export const TimeIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const PageBtn = styled.button`
  width: 32px;
  height: 32px;
  margin: 0 8px;
  padding: 6px 12px 4px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  color: #606060;
  font-size: 14px;

  &:hover {
    border: solid 1px #1797ff;
    background-color: #1797ff;
    color: white;
    cursor: pointer;
  }

  &.selected {
    border: solid 1px #1797ff;
    background-color: #1797ff;
    color: white;
  }
`;

export const SPagination = styled.nav``;
