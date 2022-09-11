import React from 'react';
import styled from "styled-components";
import SearchImg from "../../../img/search.svg";

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 195px;
  min-height: 40px;
  display: flex;
  align-items: center;
  background: rgba(71, 147, 255, 0.2);
  border-radius: 20px;
  gap: 5px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  width: 100%;
`;

function Search() {
  return (
    <Wrapper>
      <Img src={SearchImg} alt="search" />
      <SearchInput placeholder="Город" />
    </Wrapper>
  );
}

export default Search;