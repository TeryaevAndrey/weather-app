import React from 'react';
import styled from "styled-components";
import SearchImg from "../../../img/search.svg";
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setCity, setSearchValue } from '../../../store/WeatherInfo';

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

const Btn = styled.button`
  padding: 10px 20px;
  background-color: #4793FF;
  color: #fff;
  min-height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  margin-left: 10px;
  font-weight: 600;
  cursor: pointer;
`;

function Search() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.weatherInfo.searchValue);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const chooseCity = () => {
    dispatch(setCity(searchValue));
  };

  return (
    <>
    <Wrapper>
      <Img src={SearchImg} alt="search" />
      <SearchInput onChange={(event) => handleChangeSearch(event)} value={searchValue} placeholder="Город" />
    </Wrapper>
    <Btn onClick={chooseCity}>Выбрать</Btn>
    </>
  );
}

export default Search;