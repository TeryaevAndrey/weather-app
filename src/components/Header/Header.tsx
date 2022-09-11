import React from 'react';
import styled from "styled-components";
import LogoImg from "../../img/logo.png";
import ThemeImg from "../../img/theme.svg";
import Search from './Search/Search';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

function Header() {
  return (
    <HeaderStyle>
      <LogoLink href="#">
        <Logo src={LogoImg} alt="react-weather" />
      </LogoLink>
      <Theme src={ThemeImg} alt="theme" />
      <Search />
    </HeaderStyle>
  );
}

export default Header;