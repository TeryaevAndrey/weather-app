import React from "react";
import styled from "styled-components";
import LogoImg from "../../img/logo.png";
import ThemeImg from "../../img/theme.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setTheme } from "../../store/WeatherInfo";
import Search from "./Search/Search";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
`;

const LogoLink = styled.a`
  max-width: 315px;
  height: auto;
`;

const Logo = styled.img`
  width: 100%;
  cursor: pointer;
`;

const Theme = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 15px;

  @media (max-width: 390px) {
    margin-top: 20px;
    margin: 0 auto;
  }
`;

function Header() {
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector((state) => state.weatherInfo.darkTheme);

  return (
    <HeaderStyle>
      <LogoLink href="#">
        <Logo src={LogoImg} alt="react-weather" />
      </LogoLink>
      <Theme
        onClick={() => dispatch(setTheme(!darkTheme))}
        src={ThemeImg}
        alt="theme"
      />
      <Search />
    </HeaderStyle>
  );
}

export default Header;
